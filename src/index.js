import React from 'react';
import ReactDOM from 'react-dom/client'
import MortgageCalculatorApp from './components/MortgageCalculatorApp';

function R26App (){
    return (
        <MortgageCalculatorApp />
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<R26App />)