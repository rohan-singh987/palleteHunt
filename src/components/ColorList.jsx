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
        className='border-solid border-4 h-10 black' 
        value={newClr}
        onChange={NewColor} 
        onKeyUp={handleEnter}
        />
        <button onClick={AddClr} >
            Add
        </button>
        </div>
        <div className='flex' >
            {
                clrArr.map((item, index) => 
                    <Pallete item={item} key={index} />
                )
            }
        </div>
    </div>
  )
}

export default Color