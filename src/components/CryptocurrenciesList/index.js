import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.getCurrency()
  }

  getCurrency = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
    }))
    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    console.log(isLoading)
    return (
      <div>
        {isLoading === true ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div>
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
                alt="cryptocurrency"
              />
            </div>
            <div className="table-container">
              <div className="heading-container">
                <p>Coin Type</p>
                <div className="currency-group">
                  <p>USD</p>
                  <p className="item">EURO</p>
                </div>
              </div>
              <ul className="list-container">
                {blogData.map(each => (
                  <CryptocurrencyItem key={each.id} blogData={each} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
