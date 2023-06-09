const Pallete = ({clrArr}) => {
  return (
    <div className="flex p-10">
        {
                clrArr.map((item, index) => {
                    return(
                        <div key={index} className="px-3">
                            <div className="w-20 h-20 border-solid border-4" style={{backgroundColor:`${item}`}}>
                                
                            </div>
                            <div className="text-center	">
                                {item}
                            </div>
                        </div>
                    )
                })
            }
    </div>
  )
}

export default Pallete