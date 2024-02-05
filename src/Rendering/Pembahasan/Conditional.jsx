import React from "react";


export default class Conditional extends React.Component{
    state ={
        isLoading : true
    }
    render(){
       setTimeout(()=>{
        this.setState({
            isLoading: false //ini merubah isLoading dari true ke false setelah 3 detik
        })
       },3000)

        return(
            <div>
                {this.state.isLoading
                ? <h1>Loading...</h1>
                : <h1>Selamat datang di kelas mern</h1>
                }
            </div>
        )
    }
}