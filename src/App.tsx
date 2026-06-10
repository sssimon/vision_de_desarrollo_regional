import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import StatBand from './components/StatBand/StatBand'
import Diagnostico from './components/Diagnostico/Diagnostico'
import Ejes from './components/Ejes/Ejes'
import ProyectoEstrella from './components/ProyectoEstrella/ProyectoEstrella'
import Pilares from './components/Pilares/Pilares'
import Impacto from './components/Impacto/Impacto'
import Transformacion from './components/Transformacion/Transformacion'
import HojaDeRuta from './components/HojaDeRuta/HojaDeRuta'
import CTA from './components/CTA/CTA'
import Cierre from './components/Cierre/Cierre'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatBand />
        <Diagnostico />
        <Ejes />
        <ProyectoEstrella />
        <Pilares />
        <Impacto />
        <Transformacion />
        <HojaDeRuta />
        <CTA />
        <Cierre />
      </main>
      <Footer />
    </>
  )
}
