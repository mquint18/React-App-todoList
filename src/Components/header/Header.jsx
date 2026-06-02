
import doodle from "ToDoApp/src/assets/doodle.png"

function Header() {


    return(
        <div className='head-div'>
           
            <img src={doodle} alt="ToDo List" className='header-image'/>
        </div>
    );
}

export default Header;

