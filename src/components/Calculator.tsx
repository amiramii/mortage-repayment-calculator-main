import ResetBtn from './ResetBtn'
type CalculatorProps = {
    handleValues: (obj: {amount: string, term: string, rate: string, type: string}) => void;
    error: string[];
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    values: { amount: string; term: string; rate: string; type: string };
    handleReset:()=>void;
    clicked:Array<boolean>;
    handleClicked:(newArray:Array<boolean>)=>void
  };
function Calculator({ handleValues, error, handleSubmit, values, handleReset,clicked,handleClicked}: CalculatorProps){
    function handleChanges(e: React.ChangeEvent<HTMLInputElement>){
        const value=e.target.value.trim();
        handleValues({...values,[e.target.name]:value})
        
    }
    return(
        <div className='p-5  flex flex-col gap-5 w-full bg-White xl:rounded-2xl'>
            <h1 className='text-Slate-900 font-bold text-2xl'>Mortage Calculator</h1>
            <ResetBtn handleReset={handleReset}/>
            <form action='#' className='flex flex-col gap-5 xl:grid xl:grid-cols-2 xl:gap-x-5' onSubmit={(e)=>handleSubmit(e)}>
                <label  
                className='text-Slate-700 text-3xs font-medium xl:col-span-2 relative'
                 >Mortage Amount
                    <div className= {`flex border h-10 ${ clicked[0] ? "border-Lime" :error[0] ? "border-Red" :"border-Slate-500"} rounded-[0.3rem] mt-2 transition-all delay-100`} onClick={()=>{handleClicked([true,false,false])}}>
                        <div className={`${clicked[0] ? "bg-Lime" :error[0] ? "bg-Red" : "bg-Slate-100"} font-bold flex items-center px-4 rounded-l-[0.3rem] transition-all delay-100`}>
                                <span className={`${clicked[0] || error[0] ? "text-black" : "text-shadow-Slate-700"} text-sm transition-all delay-100`}>£</span>
                        </div>
                        <input 
                        type="text" 
                        value={values.amount}
                        name='amount' 
                        className='flex-1 outline-none p-1 text-Slate-900'
                        onChange={(e)=>handleChanges(e)}
                        />
                    </div>
                    <span className='absolute right-0 top-0 text-Red text-sm'>{error[0]}</span>
                </label>
                <label
                 className='text-Slate-700 text-3xs font-medium xl:col-span-1 relative' >Mortage Term
                    <div className={`flex border h-10 ${ clicked[1] ? "border-Lime" :error[1] ? "border-Red" :"border-Slate-500"} rounded-[0.3rem] mt-2 transition-all delay-100`} onClick={()=>{handleClicked([false,true,false])}}>
                        <input 
                        type="text" 
                         
                        className='flex-1 outline-none p-1 w-full text-Slate-900'
                        name='term'
                        value={values.term}
                        onChange={(e)=>handleChanges(e)}
                        />
                        <div className={`${clicked[1] ? "bg-Lime" :error[1] ? "bg-Red" : "bg-Slate-100"} font-bold flex items-center px-4 rounded-e-[0.3rem] transition-all delay-100`}>
                            <span className={`${clicked[1] || error[1] ? "text-black" : "text-shadow-Slate-700"} text-sm transition-all delay-100`}>years</span>
                        </div>
                    </div>
                    <span className='absolute right-0 top-0 text-Red text-sm'>{error[1]}</span>
                </label>
                <label 
                className='text-Slate-700 text-3xs font-medium xl:col-span-1 relative' >Interest Rate
                    <div className={`flex border h-10 ${ clicked[2] ? "border-Lime" :error[2] ? "border-Red" :"border-Slate-500"} rounded-[0.3rem] mt-2 transition-all delay-100`} onClick={()=>{handleClicked([false,false,true])}}>
                        <input 
                        type="text" 
                         
                        name='rate'
                        value={values.rate}
                        className='flex-1 outline-none px-1 w-full text-Slate-900'
                        onChange={(e)=>handleChanges(e)}/>
                        <div className={`${clicked[2] ? "bg-Lime" :error[2] ? "bg-Red" : "bg-Slate-100"} font-bold flex items-center px-4 rounded-e-[0.3rem] transition-all delay-100`}>
                            <span className={`${clicked[2] || error[2] ? "text-black" : "text-shadow-Slate-700"} text-sm`}>%</span>
                        </div>
                    </div>
                    {error && <span className='absolute right-0 top-0 text-Red text-sm'>{error[2]}</span>}
                </label>
                <div 
                className=' flex flex-col gap-4 col-span-2 relative'><span className='text-Slate-700 text-3xs font-medium'>Mortage Type</span>
                    <span className='absolute right-0 top-0 text-Red text-sm font-medium'>{error[3]}</span>
                    <label 
                    className={` text-Slate-900 font-bold  flex border h-10  items-center p-3 gap-3 rounded-[0.3rem] ${(values.type === 'repayment') ? "bg-Lime/10 border-Lime":"bg-White border-Slate-500"} `}>
                        <input 
                        type="radio"
                        name='type' 
                        value="repayment"
                        checked={values.type === 'repayment'}
                        className='relative size-4 bg-white appearance-none checked:border-Lime checked:bg-white  border-Slate-900 border rounded-full before:absolute  before:inset-0.5 before:rounded-full  before:bg-Lime not-checked:before:hidden cursor-pointer'
                        onChange={(e)=>handleChanges(e)}/>
                        Repayment
                    </label>
                    <label className={` text-Slate-900 font-bold  flex border h-10  items-center p-3 gap-3 rounded-[0.3rem] ${(values.type === 'interestOnly') ? "bg-Lime/10 border-Lime":"bg-White border-Slate-500"} `}>
                        <input 
                        type="radio" 
                        name='type'
                        value="interestOnly"
                        checked={values.type === "interestOnly"}
                        className='relative size-4 bg-white appearance-none checked:border-Lime checked:bg-white  border-Slate-900 border rounded-full before:absolute  before:inset-0.5 before:rounded-full  before:bg-Lime not-checked:before:hidden cursor-pointer '
                        onChange={(e)=>handleChanges(e)}/>
                        Interest Only
                    </label>
                </div>
                <button type='submit' className="bg-Lime flex items-center justify-center w-full p-2 gap-2 rounded-4xl xl:col-span-2" onClick={()=>{handleClicked([false,false,false,false,false])}}>
                    <img src="/assets/images/icon-calculator.svg" alt="" />
                    <span className="text-Slate-900 font-bold">Calculate Repayments</span>
                </button>
            </form>
        </div>
    )
}
export default Calculator;