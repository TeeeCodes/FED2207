
import './App.css';
import React from 'react';

import NavBar from './Components/NavBar/nav';
import NextButton from './Components/Button/nxtbutton';
import PlanBoxes from './Components/Plan_Components/plan';
import PersonalInfo from './Components/Personal_Info/Info';
import ToggleButton from './Components/Monthly/togglebtn';
import AddOns from './Components/AddOn_Components/addOn';


class App extends React.Component{
  constructor(){
    // const planData = [
    //   { arcadeAmount: 9, 
    //     advancedAmount: 12, 
    //     proAmount: 15}
    // ];
    super()
    this.state = {
      currentStep: 1,
      name: 'Test',
      hideComponent: 0
    }
    this.hideComponent = this.hideComponent.bind(this)
  }

  hideComponent (count) {
    this.setState({ hideComponent: count })
  }

  test(){ fetch('/verifyEmail', 
  {method:'post', 
  headers:{ 'Content-Type':'application/json'}}) }
  
  render(){
    
    const { hideComponent } = this.state
    return(
      <div className='test'>
        <ToggleButton Name='newsletter' />
        <ToggleButton Name='daily' />
        <ToggleButton Name='weekly' />
        <ToggleButton Name='monthly' />
      <div>
        <NextButton></NextButton>
        <ToggleButton/>
        {hideComponent === 0 ? <PersonalInfo></PersonalInfo> : null}
        <NavBar></NavBar>
        {hideComponent === 1 ? <PlanBoxes></PlanBoxes> : null}
        {hideComponent === 1 ? <AddOns /> : null}
        <button onClick={this.test}>test</button>
      </div>

      </div>

      
    )
  }
}



export default App;
