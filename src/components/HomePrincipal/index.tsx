import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'
const index = () => {
  
  return (
    <main className='mainHome'>
      <header>
        <img src='logo-area-1.png' alt='logo' />
      </header>
      <div className='descricao'>
        <h1>Descubra o mundo com nossos pacotes de viagem personalizados!</h1>
        <p>Você está pronto para viajar para lugares incríveis e criar memórias inesquecíveis? Nós temos o prazer de oferecer uma ampla variedade de pacotes de viagem personalizados para atender às suas necessidades e desejos. Seja para um mergulho em águas cristalinas ou para explorar as maravilhas da natureza, nós temos a viagem perfeita para você. Nossa equipe altamente qualificada e experiente está pronta para ajudá-lo a planejar a viagem dos seus sonhos!</p>
      <Link to='viagens'>
        <button>Ver Pacotes</button>
      </Link>
      </div>
    </main>
  )
}

export default index