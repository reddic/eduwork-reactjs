import { useState } from "react"

const FunctionalComponent = ({nama}) => {
    //menggunakan state (hook) pada functional Component

    const [value, setValue] = useState(0)

    const handlePlus = () => {
        setValue(value + 1);
    }

    const handleMinus = () => {
        setValue(value - 1);
    }
    return (
        <div>
            <h1>This Component Created by Functional Component</h1>
            <h2>Hello {nama}, Selamat Belajar.</h2>
            <button onClick={handleMinus}>-</button>
            <span>{' '} {value} {' '}</span>
            <button onClick={handlePlus}>+</button>
        </div>
    )
    
}
//default Props 
FunctionalComponent.defaultProps = {
    nama : 'User'
}
export default FunctionalComponent