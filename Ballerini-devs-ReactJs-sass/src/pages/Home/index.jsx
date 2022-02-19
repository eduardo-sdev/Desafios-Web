import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import './style.sass'

import { Header } from '../../components/Header'
export const Home = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='texts'>
          <div>
            <h1>O maior banco de devs do Brasil</h1>
            <p>Nao importa se front ou back end,  fazer networking e muito importante. Faça parte da maior comunidade de desenvolvedores brasileiros.</p>
          </div>
            <Link to='/devs'>
              <Button color='green'>Entra Agora</Button>
            </Link>
        </div>
        <div className='img'>
          <img src='/assert/Blobs-baixo.svg' />
          <img src='/assert/Programador.svg' />
        </div>
      </div>
    </>
  )
}

