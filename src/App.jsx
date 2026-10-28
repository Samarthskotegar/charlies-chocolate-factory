import CursorSeal from './components/CursorSeal'
import TopBar from './components/TopBar'
import GlassElevator from './components/GlassElevator'
import Hero from './components/Hero'
import Conveyor from './components/Conveyor'
import TastingLab from './components/TastingLab'
import GoldenTicket from './components/GoldenTicket'
import Marquee from './components/Marquee'
import FactoryMap from './components/FactoryMap'
import CartDrawer from './components/CartDrawer'

export default function App() {
  return (
    <div className="relative bg-noir">
      <div className="grain-overlay" aria-hidden="true" />

      <a
        href="#inventing-room"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:text-[0.6rem] focus:uppercase focus:tracking-[0.28em] focus:text-noir"
      >
        Skip to the conveyor
      </a>

      <CursorSeal />
      <TopBar />
      <GlassElevator />

      <main>
        <Hero />
        <Conveyor />
        <TastingLab />
        <GoldenTicket />
        <Marquee />
      </main>

      <FactoryMap />
      <CartDrawer />
    </div>
  )
}
