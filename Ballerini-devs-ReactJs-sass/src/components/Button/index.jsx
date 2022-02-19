import './style.sass'

export const Button = (props) => {
  return (
    <div className='button'>
      <div className={props.color}>
          {props.children}
      </div>
    </div>
  )
}

