import mainLogo from '../assets/logoluck.png';

import StepOne from "./StepOne.jsx";
import StepTwo from "./StepTwo.jsx";
import StepThree from "./StepThree.jsx";

export default function Form() {
    return (<>
            <div className="generalblock"><img width="290px" src={mainLogo}/></div>
            <div>
                <h1 className="h1title"> ХОЧЕШЬ ПОЛУЧИТЬ БОНУС К ДЕПОЗИТУ? </h1>
                <i><p className="ititle" color="#545454"> Пройди несколько простых шагов 👇 </p></i>
            </div>

            <div className="centerblock">
                <div>
                    <StepOne></StepOne>
                    <StepTwo></StepTwo>
                    <StepThree></StepThree>
                </div>
            </div>
        </>
    )
}