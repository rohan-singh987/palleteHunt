import { useState } from 'react'
import Pallete from './Pallete';

const Color = () => {
    const[clrArr, setClrArr] = useState([]);
    const[newClr, setNewClr] = useState('');

    const NewColor = (event) => {
        event.preventDefault()
        setNewClr(event.target.value)
    }

    const AddClr = () => {
        setClrArr([...clrArr, newClr]);
        setNewClr('')
    }

    const handleEnter = (e) => {
        if(e.code === 'Enter')
        {
            AddClr();
        }
    }

  return (
    <div className='flex flex-col justify-center h-screen items-center'>
        <div>
        <input  type="text" 
        className='border-double border-4 h-10 border-black	' 
        value={newClr}
        onChange={NewColor} 
        onKeyUp={handleEnter}
        placeholder="Enter any color"
        />
        <button onClick={AddClr} >
            Add
        </button>
        </div>
        <div>
            <Pallete clrArr = {clrArr} />
        </div>
    </div>
  )
}

export default Color