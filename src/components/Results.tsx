function Results({submitted,calculateTotal,calculateMonthlyRepayments}:{submitted:boolean,calculateTotal:(monthlyPayment:number)=>number,calculateMonthlyRepayments:()=>number}){
    const monthlyRepayments = submitted ?  calculateMonthlyRepayments() : 0;
    const total = submitted ?  calculateTotal(monthlyRepayments) : 0;
    return(
        <>
        
            {!submitted ?
                <div className="bg-Slate-900 flex flex-col p-5 items-center text-center gap-7 w-full xl:rounded-bl-4xl xl:rounded-e-2xl justify-center">
                    <img src="/assets/images/illustration-empty.svg" alt="" className="size-40"/>
                    <h1 className="text-White font-bold text-xl">Results shown here</h1>
                    <p className="text-Slate-300">Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
               </div>
            :
            <div className="bg-Slate-900 flex flex-col p-7  gap-7 w-full xl:rounded-bl-4xl xl:rounded-e-2xl ">
                <h1 className="text-White font-bold text-xl">Your results</h1>
                <p className="text-Slate-300">Your results are shown below based on the information you provided.To adjust the results,edit the form and click "calculate repayments" again</p>
                <ul className="bg-Slate-900 brightness-80 border-t-Lime border-t-4 rounded-xl p-3">
                    <li className="flex flex-col border-Slate-700 border-b px-2 gap-3 py-5">
                        <span className="text-Slate-300">Your monthly repayments</span>
                        <span className="text-Lime text-3xl font-bold">£{monthlyRepayments.toLocaleString(undefined,{ minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </li>
                    <li className="flex flex-col px-2 gap-3 py-5">
                        <span className="text-Slate-300">Total you'll repay over the term</span>
                        <span className="text-White font-bold text-2xl ">£{total.toLocaleString(undefined,{ minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </li>
                </ul>
            </div>
            }
         
        </>
    )
}
export default Results;