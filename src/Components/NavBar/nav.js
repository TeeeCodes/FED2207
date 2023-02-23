import './nav.css'
import img from "../../assets/images/bg-sidebar-desktop.svg"

function NavBar(){

    return(
        <div className="navBox">
            <img id='navImg' src={img} alt=""></img>
            <div className="textBox">
                <p>Step 1</p>
                <h3>Your Info</h3>
                
                    <div>
                        <p>Step 2</p>
                        <h3>Select Plan</h3>

                        <div>
                            <p>Step 3</p>
                            <h3>ADD-ONS</h3>

                            <div>
                                <p>Step 4</p>
                                <h3>SUMMARY</h3>
                            </div>
                            
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default NavBar