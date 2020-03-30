// create your App component here
import React, { Component } from 'react'

class App extends Component {
    constructor(){
        super()
        this.state ={
            data: []
        }
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            this.setState({
                data: data
            })
        })
    }


    render(){
        return(
            <div>
                hello
            </div>
        )
    }
}

export default App 