import React, { useState } from 'react'

export default function MortgageCalculatorApp() {
  
    let sum
    
  const [homeValue, setHomeValue] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanDuration, setLoanDuration] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("")

  const handleCalculate = () => {
    console.log(sum)
         setMonthlyPayment(homeValue*((interestRate*(Math.pow((1+interestRate),(loanDuration*12))))/(Math.pow((1+interestRate),(loanDuration*12))-1)))
         return monthlyPayment
        }
  
  
  
  
    return (
    <form onSubmit={(e) => e.preventDefault()}> 
    <div style={{
        display:"flex",
        flexDirection:"column",
        width:"30vw",
        height:"60vh",
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        boxShadow: "0px 0px 13px 0px rgba(147, 147, 179, 1)",
        justifyContent:"space-around",
        alignItems:"center"
    }}>
        <div style={{
            fontSize:"3rem",
            width:"70%",
            textAlign:"center"
        }}>Mortgage CalculatorApp</div>
        <div className='container'style={{
            display:"flex",
            flexDirection:"column",
            flexWrap:"wrap"
        }}>
            <div>
                <label>Home value</label>
                <input type="number" value={homeValue} onInput={(e) => setHomeValue(e.target.value)} />
            </div>
            <div>
                <label>Down payment</label>
                <input type="number" value={downPayment} onInput={(e) => setDownPayment(e.target.value)} />
            </div>
            <div>
                <label>Loan amount</label>
                <input type="number" value={homeValue - downPayment}  readOnly={true} />
            </div>
            <div>
                <label>Interest rate %</label>
                <input type="number" value={interestRate} onInput={(e) => setInterestRate(e.target.value)} />
            </div>
            <div>
                <label>Loan Duration</label>
                <input type="number" value={loanDuration} onInput={(e) => setLoanDuration(e.target.value)} />
            </div>
            <button onClick={handleCalculate}>Calculate</button>
            <span style={{
                margin:"20px 0px 20px",
                width:"100%",
                height:"80px",
                background:"lightblue"
            }}>{(homeValue  === "" || downPayment  === "" || interestRate === "") && "wypelnij formularz"}  
                
                {monthlyPayment}


            </span>


        </div>
    </div>
    </form>   
  )
}
