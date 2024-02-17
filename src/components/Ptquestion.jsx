import React, {useState, useEffect} from 'react'
import Box from './Box'

let arr = [1,1,1,1,0,1,1,1,1];

const Ptquestion = () => {
    const [order, setOrder] = useState([]);
    
    useEffect(() => {
    function func1(){
        if(order.length>=8){
            console.log("decolor")
            decolor()
        }
    }
   func1();
    }, [order])
    

    function decolor(){
        setInterval(() => {
            console.log("decolor is happening")
            setOrder(prevOrder => prevOrder.slice(0, -1));
            console.log(order)
        }, 3000);
    }

      function handleClick(ind){
        setOrder([...order, ind])
        console.log(ind)
        console.log(order)
    }

  return (
    <div className='main-container'>
        <div className='container'>
        {
            arr.map((ele, index)=>(
                ele===1 ? <Box key={index} index={index} order={order} setOrder={setOrder} onclick={()=>handleClick(index)} /> : <div key={index}></div>
            ))
        }
        </div>
    </div>
  )
}

export default Ptquestion