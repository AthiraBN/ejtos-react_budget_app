import React,{ useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'

function CurrencyDropdown() {

    const {dispatch, currency} = useContext(AppContext);
    const [currentCurrency, setCurrency] = useState(currency);
    const [currencyObj, setCurrencyObj] = useState();

    const currencies = [
        {symbol: '$', name: 'Dollar'},
        {symbol: '£', name: 'Pound'},
        {symbol: '€', name: 'Euro'},
        {symbol: '₹', name: 'Rupee'}
    ]

    useEffect(() => {
        if(currency) {
            const currentCurrencyObj = currencies.filter((item) => {
                return item.symbol === currency
            })
            console.log(currentCurrencyObj);
            setCurrencyObj(currentCurrencyObj)
        }
    }, [])

    useEffect(() => {
        if(currentCurrency) {
            const currentCurrencyObj = currencies.filter((item) => {
                return item.symbol === currentCurrency
            })
            setCurrencyObj(currentCurrencyObj);
            dispatch({
                type: 'CHG_CURRENCY',
                payload: currentCurrency,
            });
        }
    }, [currentCurrency])

    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value);
    }

  return (
    <select onChange={(e)=> {
        handleCurrencyChange(e)
    }} style={{background: 'lightgreen'}} className='border-0 text-white px-5 py-3'>
        {currencies.map((item) => {
            return <option selected={item.symbol === currency} value={item.symbol}>{item.symbol} {item.name}</option>
        })}
    </select>
  )
}

export default CurrencyDropdown