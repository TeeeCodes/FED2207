import './Info.css'

function PersonalInfo(){
    return (
        <div className="MainContainer">
        <h1>Personal Info</h1>
        <p className="mainP">Please provide your name, email address, and phone number.</p>
        <div>
            <form>
                <label for="name">Name</label>
                <input type="" id="nameBox" name="name" placeholder="e.g. Stephen King"></input>
            </form>
        </div>
        <div>
            <form>
                <label for="email">Email Address</label>
                <input type="" id="emailBox" name="email" placeholder="e.g. stephenking@lorem.com"></input>
            </form>
        </div>
        <div>
            <form>
                <label for="phone">Phone Number</label>
                <input type="" id="phoneBox" name="phone" placeholder="e.g. +1 234 567 890"></input>
            </form>
        </div>
    </div>
    )
}

export default PersonalInfo;