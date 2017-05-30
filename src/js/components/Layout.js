import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component{
    constructor(){
        super();
        this.state = {title:"State Title"}
    }
    
    render(){
        setTimeout(()=>{
            this.setState({title:"Changed State Title"});
        },8000);
        
        return (
            <div>
                <Header title={this.state.title}/>
                <Header title={"Another Title"}/>
                <Footer />
            </div>
        );
    }
}
