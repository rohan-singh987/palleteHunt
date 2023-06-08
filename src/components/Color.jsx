import React from 'react'
import { useState } from 'react'

const Color = () => {
    const[clrArr, setClrArr] = useState([]);

    const Addclr = (event) => {
        event.preventDefault()
        setClrArr([event.target.value])
    }
  return (
    <div>
        <input  type="text" 
        className='border-solid border-4' 
        value={clrArr}
        onChange={Addclr} 
        />
        <div >
            {clrArr}
        </div>
    </div>
  )
}

export default Color