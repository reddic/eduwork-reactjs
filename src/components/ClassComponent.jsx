import React from "react";


class ClassComponent extends React.Component {

    //state bisa di luar constructor jika menggunakan arrow function
    state = {
        value : 0 
    }
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         value : 0 
    //     }

    //     this.handleMinus = this.handleMinus.bind(this);//untuk menghandle setState handleMinus()
    //     this.handlePlus = this.handlePlus.bind(this);//untuk menghandle setState handleplus()
    // }

    handleMinus = () =>{
        this.setState({value: this.state.value - 1})
    }

    handlePlus = () => {
        this.setState({value: this.state.value + 1})
    }

    render(){
        return (
        <div>
                
                <h1>This Components created by Class Component</h1>
                <h2>Hello {this.props.nama}!!</h2>
                <button onClick={this.handleMinus}>-</button>
                <span>{' '}{this.state.value}{' '}</span>
                <button onClick={this.handlePlus}>+</button>
                
        </div>
            
        )
    }
}

export default ClassComponent;