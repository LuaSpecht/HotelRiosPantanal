import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Quartos from './pages/Quartos'
import Galeria from './pages/Galeria'
import Reserva from './pages/Reserva'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-pantanal-950">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/quartos" element={<Quartos />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/reserva" element={<Reserva />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
