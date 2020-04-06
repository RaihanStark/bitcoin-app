import React, { Component } from 'react'
import './HomePage.css'


export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            isLoaded: false
        };
    }



    componentDidMount() {
        fetch('https://blockchain.info/ticker')
            .then((res) => res.json())
            .then((data) => {
                this.setState({ data, isLoaded: true })
            })
    }

    render() {

        var { isLoaded } = this.state;

        if (!isLoaded) {
            return (
                <h1>Loading</h1>
            )
        } else {
            return (
                <div>
                    <table>
                        <tr>
                            <th>Mata Uang</th>
                            <th>Harga Beli Bitcoin</th>
                            <th>Harga Jual Bitcoin</th>
                        </tr>
                        <tr>
                            <td>Dollar Australia</td>
                            <td>{this.state.data.AUD.buy}</td>
                            <td>{this.state.data.AUD.sell}</td>
                        </tr>
                        <tr>
                            <td>Euro Eropa</td>
                            <td>{this.state.data.EUR.buy}</td>
                            <td>{this.state.data.EUR.sell}</td>
                        </tr>
                        <tr>
                            <td>Poundsterling Inggris</td>
                            <td>{this.state.data.GBP.buy}</td>
                            <td>{this.state.data.GBP.sell}</td>
                        </tr>
                        <tr>
                            <td>Yen Jepang</td>
                            <td>{this.state.data.JPY.buy}</td>
                            <td>{this.state.data.JPY.sell}</td>
                        </tr>
                        <tr>
                            <td>Dollar Amerika</td>
                            <td>{this.state.data.USD.buy}</td>
                            <td>{this.state.data.USD.sell}</td>
                        </tr>
                    </table>
                </div>
            )
        }
    }
}
