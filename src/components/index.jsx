import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
import BMICalculator from "./BmiCalculator";

class Komponen extends React.Component {
    
    render() {
        return (
            <div>
                <ClassComponent nama="Arif Faisal"></ClassComponent>
                <FunctionalComponent nama = "Johan"></FunctionalComponent>
                <div><BMICalculator></BMICalculator></div>
               
                
            </div>
        )
    }
}
export default Komponen;