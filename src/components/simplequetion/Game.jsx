import React, { useState } from 'react'


const Game = () => {
    const [arr, setArr] = useState(["cricket", "football", "badminton"]);
    const [checkBoxes, setCheckBoxes] = useState([])


    function handleClick(index){
        let newArr = arr.filter((ele, ind)=> index!==ind) ;
        setArr(prev => newArr)
    }

    function handleChange(index){
        setCheckBoxes(prev=>[...prev, index])
    }
  return (
    <div>
        <ul>
        {
            arr.map((ele, index)=>(
                <div>
                    <li>{ele} 
                    <span><input type="checkbox" onChange={()=>handleChange(index)} /></span>

                    <span>{checkBoxes.includes(index) ? (<button onClick={()=>handleClick(index)}>delete</button>) : (<span></span>)}</span>
                     </li>
                </div>
            ))
        }
        </ul>
    </div>
  )
}

export default Game