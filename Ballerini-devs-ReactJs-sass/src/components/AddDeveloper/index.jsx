import { useEffect, useState } from 'react'

import { Modal } from "../Modal"
import { Button } from "../Button"
import { Input } from "../Input"

import S from './style.module.sass'

const getDatafromLS = () => {
    const data = localStorage.getItem('developers')
    if(data) {
        return JSON.parse(data)
    } else {
        return []
    }

}

export const AddDeveloper = ({ closeModal }) => {
    const [developers, setDevelopers] = useState(getDatafromLS())

    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [cargo, setCargo] = useState('')
    const [github, setGithub] = useState('')
    const [linkedin, setLinkedin] = useState('')
    
    const handleAddDeveloperSubmit=(e)=>{
        e.preventDefault()
        let developer = {
            name, 
            avatar,
            cargo, 
            github,
            linkedin
        }
        setDevelopers([...developers,developer])

        setName('')
        setAvatar('')  
        setCargo('')
        setGithub('')
        setLinkedin('')
    }

    useEffect(()=>{
        localStorage.setItem('developers', JSON.stringify(developers))
    }, [developers])

    return (
        <>
            <div className={S.container}>
                <Modal Title="Adicional Desenvolvedor">
                    <div className='addDeveloper'></div>
                    <form autocompelete="off" onSubmit={handleAddDeveloperSubmit}>
                        <div className={S.formBody}>
                            <Input label={Nome} placeholder=""/>
                            <label>Nome:</label>
                            <input onChange={(e)=>setName(e.target.value)} value={name} placeholder="*" type="text" required/>

                            <label>Avatar:</label>
                            <input onChange={(e)=>setAvatar(e.target.value)} value={avatar} type="text" />

                            <label>Cargo:</label>
                            <input onChange={(e)=>setCargo(e.target.value)} value={cargo} type="text" />

                            <label>Github:</label>
                            <input onChange={(e)=>setGithub(e.target.value)} value={github} type="text" />

                            <label>LinkedIn:</label>
                            <input onChange={(e)=>setLinkedin(e.target.value)} value={linkedin} type="text" />
                        </div>
                        <div className={S.footerButton}>
                              <button onClick={() => closeModal(false)}>
                                  <Button>Cancelar</Button>
                              </button>
                              <button type="submit">
                                  <Button color="green">Adicional</Button>
                              </button>
                        </div>
                    </form>
                </Modal>
            </div>
        </>
    )
}

