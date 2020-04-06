import React, { Component } from 'react'

export default class ConvertToRupiah extends Component {
    constructor(props) {
        super(props)

        this.state = {
            convertedCurrency: 0,
            value: 0,
            dollarToIdr: 14000,
            validCurrency: true
        }
    }

    convertHandler(e) {
        this.setState({
            value: e.target.value
        })

        fetch('https://blockchain.info/ticker')
            .then(res => res.json())
            .then(data => {
                this.setState({ convertedCurrency: data['USD']['last'] * this.state.value * this.state.dollarToIdr })
            })
    }
    render() {
        return (
            <div>
                <h2>Konversi Bitcoin ke Rupiah</h2>
                <h6>Kurs 1 USD = Rp.14.000,-</h6>
                <input type='number' value={this.state.value} onChange={(e) => this.convertHandler(e)}></input>
                {this.state.validCurrency ? <h3>BTC {this.state.value} = Rp. {this.state.convertedCurrency}</h3> : <h3>Please Input Valid Number!</h3>}

            </div>
        )
    }
}
