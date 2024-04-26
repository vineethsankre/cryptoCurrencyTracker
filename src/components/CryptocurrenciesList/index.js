import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    cryptoCurrenciesList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoCurreniciesList()
  }

  getCryptoCurreniciesList = async () => {
    const responseData = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await responseData.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({cryptoCurrenciesList: updatedData, isLoading: false})
  }
  render() {
    const {cryptoCurrenciesList, isLoading} = this.state
    return (
      isLoading ? 
        (<div data-testid="loader">
          <Loader type="Rings" color="#ffffff" height={80} width={80} />
        </div>) :
        (<div className="responsive-container">
          <h1 className="title">Cryptocurrency Tracker</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
            className="cryptocurrency-image"
          />
          <ul className="tracker-table">
            <li className="tracker-header">
              <p className="table-header-cell">Coin Type</p>
              <>
                <p className="table-header-cell">USD</p>
                <p className="table-header-cell">EURO</p>
              </>
            </li>
            {cryptoCurrenciesList.map(eachCurrency => (
              <CryptocurrencyItem
                key={eachCurrency.id}
                cryptoCurrencyDetails={eachCurrency}
              />
            ))}
        </ul>
      </div>)
    )
  }
}

export default CryptocurrenciesList
