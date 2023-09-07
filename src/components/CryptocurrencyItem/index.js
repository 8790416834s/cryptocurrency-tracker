import './index.css'

const CryptocurrencyItem = props => {
  const {blogData} = props
  const {euroValue, usdValue, currencyName, currencyLogo} = blogData

  return (
    <li className="list-item">
      <div className="name-container">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="name">{currencyName}</p>
      </div>
      <div className="value-container">
        <p>{usdValue}</p>
        <p className="euro">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
