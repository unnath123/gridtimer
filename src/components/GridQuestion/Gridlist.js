// import React, { useState,  useEffect } from 'react'


// let emptyArray = [0,0,0,0,0,0,0,0,0]

// const Gridlist = () => {
//     const [arr, setArr] = useState(emptyArray);
//     const [indexArr, setindexArr] = useState([]);
//     const [flag, setFlag] =useState(0)

//     //  function deColor(){
//     //     arr.map(async (ele, index)=>{
//     //         console.log("Im getting executed")
//     //         let newArr = [...arr];
//     //         newArr[index] = 0;
//     //         setTimeout(() => {
//     //             setArr([...newArr])
//     //         }, 3000);
//     //     })
//     // }
//     function deColor() {
//         indexArr.forEach((index, i) => {
//             setTimeout(() => {
//                 setArr(prevArr => {
//                     let newArr = [...prevArr]; // Create a new array based on the previous state
//                     newArr[index] = 0; // Update the specific index to 0
//                     return newArr; // Return the updated array
//                 });
//             }, (i + 1) * 3000);
//         });
//     }

//     function func1(){
//         let brr = indexArr.reverse();

//         deColor();
//     }

//     useEffect(() => {
//         console.log(indexArr);
        
//         if(!(arr.includes(0))){
//             func1()
//         }
//     },[flag]);

//     function handleClick(index){  
//         setFlag(flag+1)
//         let newArr = [...arr];
//         newArr[index] = 1;
//         setArr([...newArr]) 
//         setindexArr([...indexArr, index])
//     }
    
//   return (
//     <div className='main-container'>
//         <div className='container'>
//             {
//                 arr.map((ele, index)=>(<div style={ele ? {backgroundColor:"green"} : {backgroundColor:"white"}} onClick={()=>handleClick(index)} className='box'></div>))
//             }
//         </div>
//     </div>

//   )
// }zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// export default Gridlist