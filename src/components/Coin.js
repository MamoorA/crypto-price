import React from 'react'

//what is needed of the API
function Coin({name, icon, marketCap, price, symbol}){
    return(
        //The name, icon, MarketCap price and symbol of the coins are shown
        <div className='Coin'>
            <h1>Name: {name} </h1>
            <img src={icon}/>
            <h3>Price: {price}</h3>
            <h3>Marketcap: {marketCap}</h3>
            <h3>Symbol: {symbol}</h3>
        </div>
    )
}

export default Coin