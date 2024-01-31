import React, { useState } from 'react';
import './index.css'

function BMICalculator() {
    const [weight, setWeight] = useState(70); 
    const [height, setHeight] = useState(170); 
    const [bmi, setBMI] = useState(0);
    const [bmiCategory, setBMICategory] = useState('');

    
    function calculateBMI() {
        
        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            alert("Please enter valid weight and height.");
            return;
        }

       
        const calculatedBMI = weight / Math.pow(height / 100, 2);

      
        setBMI(calculatedBMI.toFixed(2));

       
        const category = getBMICategory(calculatedBMI);
        setBMICategory(category);
    }

    
    function getBMICategory(bmi) {
        if (bmi < 18.5) {
            return "Kurus";
        } else if (bmi < 24.9) {
            return "Berat Badan Normal";
        } else if (bmi < 29.9) {
            return "Berat Badan Berlebih";
        } else {
            return "Obesitas";
        }
    }

    
    function handleWeightChange(event) {
        const newWeight = parseFloat(event.target.value);
        setWeight(newWeight);
    }

    
    function handleHeightChange(event) {
        const newHeight = parseFloat(event.target.value);
        setHeight(newHeight);
    }

    return (
        <div class="bmi-calculator">
            <h1>BMI Calculator</h1>
            <div>
                <label>Weight: {weight} kg</label>
                <input
                    type="range"
                    id="weightSlider"
                    min="0"
                    max="200"
                    value={weight}
                    onChange={handleWeightChange}
                />
            </div>
            <div>
                <label>Height: {height} cm</label>
                <input
                    type="range"
                    id="heightSlider"
                    min="0"
                    max="300"
                    value={height}
                    onChange={handleHeightChange}
                />
            </div>
            <button onClick={calculateBMI}>Calculate BMI</button>
            <div>
                <label>BMI Value: {bmi}</label>
            </div>
            <div>
                <label>BMI Category: {bmiCategory}</label>
            </div>
        </div>
    );
}

export default BMICalculator;
