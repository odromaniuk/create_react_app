import React, {Component} from 'react'
import {connect} from 'react-redux'

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    incrementIfOdd = () => {
        if (this.props.fafa % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    incrementAsync = () => {
        setTimeout(this.props.onIncrement, 1000)
    }

    render() {
        console.log("counter rendered ... " + this.props.fafa);
        return (
            <p>
                Clicked: {this.props.fafa} times
                {' '}
                <button onClick={this.props.onIncrement}>
                    +
                </button>
                {' '}
                <button onClick={this.props.onDecrement}>
                    -
                </button>
                {' '}
                <button onClick={this.incrementIfOdd}>
                    Increment if odd
                </button>
                {' '}
                <button onClick={this.incrementAsync}>
                    Increment async
                </button>
            </p>
        )
    }
}
export default connect(
    state => ({
        fafa: state
    }),
    dispatch => ({
        onIncrement: () => {
            console.log("increment ");
            dispatch({type: 'INCREMENT'});
        },
        onDecrement: () => {
            console.log("decrement ");
            dispatch({type: 'DECREMENT'})
        }
    }))(Counter);
