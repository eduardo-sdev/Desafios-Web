import './style.sass'
export const Modal = (props) => {

    return (
    <>
      <div className="modalBg">
        <div className="modalContainer">
          <div className="modalTitle">
              {props.Title}
          </div>
          <div className="modalBody">
              {props.children}
          </div>
        </div>
      </div>
      </>
    )
}

