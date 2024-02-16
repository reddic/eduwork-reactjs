import React from "react";

import RegistrasiValidation from "./Pembahasan/registrasi";


export default class Form extends React.Component {

    render(){
        return(
            <div>
               <RegistrasiValidation/>
            </div>
        )
    }
}