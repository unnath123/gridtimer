import React,{useEffect, useState} from 'react'

const Box = ({order, setOrder, index, onclick}) => {
    

  return (
    <div onClick={onclick} className={order.includes(index) ? "active" : "not-active"}></div>
  )
}

export default Box

