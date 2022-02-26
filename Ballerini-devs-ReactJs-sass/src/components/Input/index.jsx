import S from './style.module.sass'

export const Input = (label, placeholder) => {
    return (
        <>
            <label>{label}</label>
            <input placeholder={placeholder} type="text"/>
        </>
    )
}

