import React from "react";
import ReactDOM from "react-dom";

// import Layout from "./components/Layout";

class Layout extends React.Component{
    constructor(){
        super();
        this.name = "Bakhtiiar";
    }
    
    render(){
        return (
            <div>
                <h1>My React App and My name is {this.name}</h1>
            </div>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
