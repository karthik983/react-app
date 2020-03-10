import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component{
    constructor(){
        super();
        this.state={
            data:"DATA"
        };
    }
    render(){
        return (
            <>
            <h1>Hello from Webpack</h1>
            </>
        )
    }
}

ReactDOM.render(<App />,document.getElementById("root"))

