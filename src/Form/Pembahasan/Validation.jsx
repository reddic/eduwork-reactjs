
import React from "react";
import * as Validator from "validatorjs";

//validation
const Input = ({label, name, type, onChange}) => {
    return(
        <div>
            <label >{label}:</label>
            <br />
            <input type={type} name={name} onChange={ e => onChange(e.target.value)}/>
        </div>
    )
}

const ShowErrors = ({errors}) => {
    return (
        <ul style={{color: 'red', marginLeft: '-20px'}}>
            {
                errors.map((errors,i) => <li key={i}>{errors}</li>)
            }
        </ul>
    )
}



export default class Validation extends React.Component{

    state = {
        email:'',
        password:'',
        errors:[]
    }

    handleSubmit = event => {

        event.preventDefault();

        const {email,password} =this.state;

        // let message = [];

        // if (email.length === 0){
        //     message = [...message, 'Email tidak boleh kosong!!'];
        // }
        // if (password.length === 0){
        //     message = [...message, 'password tidak boleh kosong!!'];
        // }

        // const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
        // if(!re.test(String(email).toLowerCase())){
        //     message = [...message, 'Email Tidak Valid!!!'];
        // }

        // if(password.length < 8){
        //     message = [...message,'Password Terlalu Pendek']
        // }

        // if (message.length > 0 ){
        //     this.setState({errors:message
        //     }, () => console.log(this.state.errors));
        // }else{
        //     alert(`
        //     Email: ${this.state.email}
        //     Password: ${this.state.password}
        //     `);
        //     this.setState({errors:[]});
        // }

        let data = {email,password};

        let rules = {
            email: 'required|email',
            password: 'required|min:8'
        }

        let validation = new Validator(data, rules);
        validation.passes(); 
        this.setState({
            errors:[
                ...validation.errors.get("email"),
                ...validation.errors.get("password"),
            ]
        })

    }
    
    
    render(){
        const style ={
            width: '400px',
            margin: '100px auto 0',
            border: '1px solid black',
            padding: '10px'
        }

        return(
            <div style={style}>
                {
                    this.state.errors && <ShowErrors errors={this.state.errors}/>
                }
                <h4>Login Page</h4>
                <form onSubmit={this.handleSubmit}>
                    <Input type="email" name="username" label="Email" onChange={value => this.setState({email: value})}/>
                    <Input type="password" name="password" label="Password" onChange={value => this.setState({password: value})}/>
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        )

    }
}