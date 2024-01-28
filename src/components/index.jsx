import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

class Komponen extends React.Component {
    
    render() {
        return (
            <div>
                <ClassComponent nama="Arif Faisal"></ClassComponent>
                <FunctionalComponent nama = "Johan"></FunctionalComponent>
            </div>
        )
    }
}
export default Komponen;