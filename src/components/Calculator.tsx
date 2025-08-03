import ResetBtn from './ResetBtn'
type CalculatorProps = {
    handleValues: (obj: {amount: string, term: string, rate: string, type: string}) => void;
    error: string[];
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    values: { amount: string; term: string; rate: string; type: string };
    handleReset:()=>void
  };
function Calculator({ handleValues, error, handleSubmit, values, handleReset}: CalculatorProps){
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
                    <div className=' flex border h-10 border-Slate-500 rounded-[0.3rem] mt-2'>
                        <div className='bg-Slate-100 font-bold flex items-center px-4 rounded-l-[0.3rem]'>
                                <span className='text-Slate-700 '>£</span>
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
                    <div className=' flex border h-10 border-Slate-500  mt-2 rounded-[0.3rem]'>
                        <input 
                        type="text" 
                         
                        className='flex-1 outline-none p-1 w-full text-Slate-900'
                        name='term'
                        value={values.term}
                        onChange={(e)=>handleChanges(e)}
                        />
                        <div className='bg-Slate-100 font-bold flex items-center  px-4 rounded-e-[0.3rem]'>
                            <span className=' text-Slate-700 text-sm'>years</span>
                        </div>
                    </div>
                    <span className='absolute right-0 top-0 text-Red text-sm'>{error[1]}</span>
                </label>
                <label 
                className='text-Slate-700 text-3xs font-medium xl:col-span-1 relative' >Interest Rate
                    <div className=' flex border h-10 border-Slate-500  mt-2 rounded-[0.3rem]'>
                        <input 
                        type="text" 
                         
                        name='rate'
                        value={values.rate}
                        className='flex-1 outline-none px-1 w-full text-Slate-900'
                        onChange={(e)=>handleChanges(e)}/>
                        <div className='bg-Slate-100 font-bold flex items-center px-4 rounded-e-[0.3rem]'>
                            <span className='text-Slate-700 text-sm'>%</span>
                        </div>
                    </div>
                    {error && <span className='absolute right-0 top-0 text-Red text-sm'>{error[2]}</span>}
                </label>
                <div 
                className=' flex flex-col gap-4 col-span-2 relative'><span className='text-Slate-700 text-3xs font-medium'>Mortage Type</span>
                    <span className='absolute right-0 top-0 text-Red text-sm font-medium'>{error[3]}</span>
                    <label 
                    className='peer-checked:bg-Lime text-Slate-900 font-bold hover:border-Lime flex border h-10 border-Slate-500  items-center p-3 gap-3 rounded-[0.3rem]'>
                        <input 
                        type="radio"
                        name='type' 
                        value="repayment"
                        checked={values.type === 'repayment'}
                        className='peer relative size-4 bg-white appearance-none checked:border-Lime checked:bg-white  border-Slate-900 border rounded-full before:absolute  before:inset-0.5 before:rounded-full  before:bg-Lime not-checked:before:hidden cursor-pointer'
                        onChange={(e)=>handleChanges(e)}/>
                        Repayment
                    </label>
                    <label className='text-Slate-900 font-bold hover:border-Lime flex border h-10 border-Slate-500 rounded-[0.3rem] items-center p-3 gap-3 '>
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
                <button type='submit' className="bg-Lime flex items-center justify-center w-full p-2 gap-2 rounded-4xl xl:col-span-2">
                    <img src="/assets/images/icon-calculator.svg" alt="" />
                    <span className="text-Slate-900 font-bold">Calculate Repayments</span>
                </button>
            </form>
        </div>
    )
}
export default Calculator;