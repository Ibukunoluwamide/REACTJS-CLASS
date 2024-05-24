import { Component } from "react";
import { increment } from "../redux/Counter";

class ClassComponent extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        number: 10,
        myName: 'Ola'
     }
     increment = () => {
        this.setState({
            number: this.state.number + 1
        })
    }
    changeName = ()=>{
        this.setState({
            myName: 'Olamide'
        })
    }
    render() { 
        return ( 
            <>
            <h1>Class Based Component</h1>
            <p>Number is {this.state.number}</p>
            <p>Name is{this.state.myName}</p>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.changeName}>Change</button>
            </>
         );
    }
}
 
export default ClassComponent;