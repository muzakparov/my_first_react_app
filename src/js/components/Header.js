import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component{
   render(){
       console.log("in Header",this.props.title);
        return (
            <div>
                <Title title={this.props.title}/>
            </div>
        );
    }
}
