
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

const Textarea = ({label, name, onChange}) => {
    return(
        <div>
            <label >{label}:</label>
            <br />
            <textarea  name={name} onChange={ e => onChange(e.target.value)}/>
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



export default class RegistrasiValidation extends React.Component{

    state = {
        name:'',
        email:'',
        password:'',
        gender:'',
        alamat:'',
        errors:[]
    }

    handleSubmit = event => {

        event.preventDefault();

       

        const {name,email,password,gender,alamat} =this.state;
        let data = {name,email,password,gender,alamat};

        let rules = {
            name:'required',
            email: 'required|email',
            password: 'required|min:8',
            gender:'required',
            alamat:'required'
        }

        let validation = new Validator(data, rules);
        let validationResult = validation.passes();
        if (!validationResult){
            alert(`
            nama: ${this.state.name}
            email: ${this.state.email}
            password: ${this.state.password}
            alamat: ${this.state.alamat}
            
            `);
        }
        this.setState({
            errors:[
                ...validation.errors.get("name"),
                ...validation.errors.get("email"),
                ...validation.errors.get("password"),
                ...validation.errors.get("alamat"),
            ]
        });

       

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
                <h4>Registration Page</h4>
                <form onSubmit={this.handleSubmit}>
                    <Input type="text" name="fullname" label="Nama" onChange={value => this.setState({name: value})}/>
                    <Input type="email" name="username" label="Email" onChange={value => this.setState({email: value})}/>
                    <Input type="password" name="password" label="Password" onChange={value => this.setState({password: value})}/>
                    <Textarea name="alamat" label="Alamat" onChange={value => this.setState({alamat: value})}/>
                   
                    <br />
                    <button type="submit">Register</button>
                </form>
            </div>
        )

    }
}