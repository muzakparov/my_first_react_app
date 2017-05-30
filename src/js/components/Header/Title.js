import React from "react";

export default class Title extends React.Component{
   render(){
        console.log("in Title",this.props.title);

        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}
