

function Button({label,onButtonClick}) {

    return(
    

        <button className="clicky" onClick={onButtonClick}>{label}</button>
    
    )
}

export default Button;