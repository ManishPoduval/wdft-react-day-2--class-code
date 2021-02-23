import React, { Component } from 'react'


class Button extends Component {
    //You can define as many variables as you want in your state
    // state is a keyword. 

    state = {
        number: 0,
        colors: ['red', 'blue', 'green', 'purple', 'yellow'],
        name: 'Manish',
        text: 'Like'
    }

    // handle click event triggered by the button
    handleClick = () => {
        console.log('Click works')
        // this will point to its lexical scope in ES6
        console.log(this)
        //setState is a function coming from the Component class in React
        this.setState({
            number: this.state.number +1,
        }, () => {
            // you will always get the updated value
            console.log(this.state.number)
        })

        // you will not always get the updated value since setState is async
        console.log(this.state.number)
    }

    render() {

        //destructuring
        const {colors, number} = this.state

        //inline styling
        let myStyle = {
            backgroundColor: colors[Math.floor(Math.random() * colors.length)]
        }

        return (
            <button style={myStyle} onClick={this.handleClick} >{number} Like</button>
        )
    }
}

export default Button
