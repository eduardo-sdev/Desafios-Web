import S from './style.module.sass'

 export const CardDevelopers = ({ devs }) => {
    console.log(devs)
    return devs.map(dev => (
        <div>
            {dev.name}
        </div>
    ))
 }

