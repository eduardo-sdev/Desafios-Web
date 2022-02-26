import { useState } from 'react'

import { Header } from '../../components/Header'
import { AddDeveloper } from '../../components/AddDeveloper'
import { Button } from '../../components/Button'
import { CardDevelopers } from '../../components/CardDevelopers'

import S from './style.module.sass'

const getDatafromLS = () => {
    const data = localStorage.getItem('developers')
    if(data) {
    console.log(':', data)
        return JSON.stringify(data)
    } else {
        return []
    }

}
const foo = getDatafromLS()
    console.log(':', foo)

export const Devs = () => {
    const [ addDeveloper, setAddDeveloper ] = useState(false)
     return (
      <>
         <div className={S.container}>
            <Header className={S.header} searchBar={true}/>
             <button className={S.addDeveloperButton} onClick={() => setAddDeveloper(true)}>
                    <Button color='green'>Adicionar Desenvolvedor</Button>
              </button> 
            <div>
            <CardDevelopers devs={foo} />

            {addDeveloper && <AddDeveloper getData={getDatafromLS} closeModal={setAddDeveloper}/>}
            </div>
         </div>
      </>
     )
 }

