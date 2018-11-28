import React, { Component } from 'react'

import Flatpickr from 'react-flatpickr'
import './airbnb.css'



class App extends Component {
    state = {
        v: '2016-01-01 01:01',
        onChange: (_, str) => {
            console.info(str)
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState(state => ({
                v: state.v.replace('2016', '2017'),
                onChange: (_, str) => {
                    console.info('New change handler: ', str)
                }
            }))
        }, 2000)
    }

    render() {
        const { v } = this.state

        return (

                <Flatpickr value={[v, '2016-01-10']} options={{mode: 'range'}}
                           onChange={(_, str) => console.info(str)} />

        )
    }
}
export default App
