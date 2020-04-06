import React, { Component } from 'react'

export default class ConvertToBTC extends Component {
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

        const valueInDollar = parseInt(e.target.value) / this.state.dollarToIdr;
        fetch('https://blockchain.info/tobtc?currency=USD&value=' + valueInDollar)
            .then(res => res.text())
            .then(data => {
                if (data === "Parameter <value> with invalid numerical value") {
                    this.setState({
                        validCurrency: false
                    })
                } else {
                    this.setState({
                        convertedCurrency: data,
                        validCurrency: true
                    })
                }

            })
    }
    render() {
        return (
            <div>
                <h2>Konversi Rupiah ke Bitcoin</h2>
                <h6>Kurs 1 USD = Rp.14.000,-</h6>
                <input type='number' value={this.state.value} onChange={(e) => this.convertHandler(e)}></input>
                {this.state.validCurrency ? <h3>Rp.{this.state.value} = BTC {this.state.convertedCurrency}</h3> : <h3>Please Input Valid Number!</h3>}

            </div>
        )
    }
}
