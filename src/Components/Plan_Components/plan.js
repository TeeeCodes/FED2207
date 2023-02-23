import './plan.css';
import arcade from '../../assets/images/icon-arcade.svg'
import advanced from '../../assets/images/icon-advanced.svg'
import pro from '../../assets/images/icon-pro.svg'

function PlanBoxes(props){

   
    return (
        <div className="planBox">
            <div className="arcadeBox">
                <img id='arcadeImg' src={arcade} alt=""/>
                <h4 className="planH4">Arcade</h4>
                <p className="planP">${props.test}/mo</p>

                    <div className="advancedBox">
                        <img id='advancedImg' src={advanced} alt=""/>
                        <h4 className="planH4">Advanced</h4>
                        <p className="planP">${props.advancedAmount}/mo</p> 

                            <div className="proBox">
                                <img id='proImg' src={pro} alt=""/>
                                <h4 className="planH4">Pro</h4>
                                <p className="planP">${props.proAmount}/mo</p> 
                            </div>
                    </div>
            </div>
        </div>
    )
}

export default PlanBoxes;