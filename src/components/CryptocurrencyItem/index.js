import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} =
    cryptoCurrencyDetails
  return (
    <li className="each-row">
      <>
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-text">{currencyName}</p>
      </>
      <p className="currency-text">{usdValue}</p>
      <p className="currency-text">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
