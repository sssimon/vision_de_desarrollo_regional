# ============================================================
# sync-whitepaper.ps1
# Sincroniza el whitepaper con la Landing:
#   1. Si el .docx es más nuevo que el .pdf, regenera el PDF con Word.
#   2. Copia el PDF a Landing\public\docs\.
#   3. Con -Publicar: commit + push (dispara el deploy a GitHub Pages).
#
# Vive en Landing\scripts\; el whitepaper fuente está fuera del repo,
# en ..\..\Documentos Estratégicos\ (carpeta del proyecto Táchira).
#
# Uso (desde la carpeta del proyecto):
#   .\Landing\scripts\sync-whitepaper.ps1            # solo regenerar y copiar
#   .\Landing\scripts\sync-whitepaper.ps1 -Publicar  # además commit + push
# ============================================================
param(
    [switch]$Publicar
)

$ErrorActionPreference = 'Stop'

$landing  = Split-Path $PSScriptRoot           # ...\Landing
$projRoot = Split-Path $landing                # carpeta del proyecto Táchira
$docsDir  = Join-Path $projRoot 'Documentos Estratégicos'
$docxPath = Join-Path $docsDir 'Whitepaper_Estrategia_Vial_Tachira.docx'
$pdfPath  = Join-Path $docsDir 'Whitepaper_Estrategia_Vial_Tachira.pdf'
$destDir  = Join-Path $landing 'public\docs'
$destPdf  = Join-Path $destDir 'Whitepaper_Estrategia_Vial_Tachira.pdf'

# --- 1. Regenerar el PDF si el Word es más reciente ---
$docx = Get-Item -LiteralPath $docxPath
$pdf  = Get-Item -LiteralPath $pdfPath -ErrorAction SilentlyContinue

if (-not $pdf -or $docx.LastWriteTime -gt $pdf.LastWriteTime) {
    $lockFile = Join-Path $docsDir ('~$' + 'itepaper_Estrategia_Vial_Tachira.docx')
    if (Test-Path -LiteralPath $lockFile) {
        Write-Warning 'El whitepaper está abierto en Word. Ciérralo y vuelve a ejecutar.'
        exit 1
    }
    Write-Host 'El Word es más reciente: regenerando el PDF...' -ForegroundColor Cyan
    $word = New-Object -ComObject Word.Application
    $word.Visible = $false
    try {
        $doc = $word.Documents.Open($docx.FullName, $false, $true)
        $doc.SaveAs2($pdfPath, 17)  # 17 = wdFormatPDF
        $doc.Close($false)
    } finally {
        $word.Quit()
        [Runtime.InteropServices.Marshal]::ReleaseComObject($word) | Out-Null
    }
    Write-Host "PDF regenerado: $pdfPath" -ForegroundColor Green
} else {
    Write-Host 'El PDF ya está al día con el Word.' -ForegroundColor Green
}

# --- 2. Copiar a la Landing ---
New-Item -ItemType Directory -Force -Path $destDir | Out-Null
Copy-Item -LiteralPath $pdfPath -Destination $destPdf -Force
Write-Host "Copiado a la Landing: $destPdf" -ForegroundColor Green

# --- 3. Publicar (opcional) ---
$pendiente = git -C $landing status --porcelain -- public/docs
if (-not $pendiente) {
    Write-Host 'La Landing ya tenía esta versión del PDF; nada que publicar.' -ForegroundColor Green
    exit 0
}

if ($Publicar) {
    Write-Host 'Publicando en GitHub Pages...' -ForegroundColor Cyan
    git -C $landing add public/docs
    git -C $landing commit -m 'Actualiza el whitepaper PDF'
    git -C $landing pull --rebase origin main
    git -C $landing push
    Write-Host 'Push hecho: el deploy a GitHub Pages corre automáticamente.' -ForegroundColor Green
} else {
    Write-Host 'PDF actualizado en la Landing (sin commitear).' -ForegroundColor Yellow
    Write-Host 'Para publicarlo: .\sync-whitepaper.ps1 -Publicar' -ForegroundColor Yellow
}
