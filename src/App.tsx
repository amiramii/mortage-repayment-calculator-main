import './App.css'
import Calculator from './components/Calculator';
import Results from './components/Results';
import { useState } from 'react';
function App() {
    const [values,setValues]=useState({
      amount:'',
      term:'',
      rate:'',
      type:'',
    })
    function handleValues(obj:{amount:string,term:string,rate:string,type:string}){
        setValues(obj)
    }
    const [error,setError]=useState<string[]>(Array(4).fill(''));
    function handleErrors(errorArray:Array<string>){
        setError(errorArray)
    }
    const [submitted,setSubmitted]=useState(false);
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      const newErrors = [
        values.amount.trim() === ''
          ? 'required'
          : !/^\d{1,3}(,\d{3})*(\.\d+)?$|^\d+(\.\d+)?$/.test(values.amount)
          ? 'only numbers'
          : '',
        values.term.trim() === ''
          ? 'required'
          : !/^([1-9]|[1-3][0-9]|40)$/.test(values.term)
          ? '0 to 40 years'
          : '',
        values.rate.trim() === ''
          ? 'required'
          : !/^(?:\d|[1-9]\d|100)(?:\.\d+)?$/.test(values.rate)
          ? 'only percentage'
          : '',
        values.type.trim() === '' ? 'required' : '',
      ];
      handleErrors(newErrors);
      const hasErrors = newErrors.some((err) => err !== '');
      if (hasErrors) {
        setSubmitted(false);
        return;
      }
      setSubmitted(true);
    }
  function calculateMonthlyRepayments(){
    const amount=parseFloat(values.amount.replace(/,/g,""));
    const term=parseInt(values.term);
    const rate=parseFloat(values.rate);
    const type=values.type;
    const monthlyRate = rate / 100 / 12;
    const totalPayments = term * 12;
    if (type === "repayment") {
      // Annuity formula
      const monthlyPayment =
        amount *
        (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
        (Math.pow(1 + monthlyRate, totalPayments) - 1);
      return monthlyPayment;
    } else {
      return amount * monthlyRate;
    }
  }
  function calculateTotal(monthlyPayment:number):number{
    const amount=parseFloat(values.amount.replace(/,/g,""));
    const term = parseInt(values.term);
    const type=values.type;
    if(type === "repayment"){
      const total = monthlyPayment * term * 12;
      return total;
    }else{
      const total = monthlyPayment * 12 * term + amount;
      return total;
    }
    
  }
  function handleReset(){
      handleValues({
          amount:'',
          term:'',
          rate:'',
          type:'',
      })
      setSubmitted(false);
  }
  return (
    <>
      <div className=' min-h-dvh bg-Slate-100 flex items-center justify-center'>
        <div className='flex flex-col xl:flex-row    m-auto xl:w-2/3 bg-white xl:rounded-2xl'>
        <Calculator 
         handleValues={handleValues}
         error={error}
         handleSubmit={handleSubmit}
         values={values}
         handleReset={handleReset}
        />
        <Results 
        submitted={submitted}
        calculateTotal={calculateTotal}
        calculateMonthlyRepayments={calculateMonthlyRepayments}
        />
        </div>
      </div>
    </>
  )
}

export default App
