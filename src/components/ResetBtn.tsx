function ResetBtn({handleReset}:{handleReset:()=>void}){
    return(
        <>
         <button type="button" className="text-Slate-700  text-start underline underline-offset-4 decoration-Slate-300" onClick={handleReset}>
            Clear All
         </button>
        </>
    )
}
export default ResetBtn;