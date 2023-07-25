
import { Col,Row } from 'antd';
import { useState } from "react";
import { IconPen, IconText } from "icons"

 const ToolOptions = ({ onHandleAddText,onHandleDraw }) =>{
    
  return (
    <>
    <div className='fixed z-10 text-white top-1 left-1/2 p-3'>
        <IconPen title="icon pencil" className="cursor-pointer mr-4" onClick={()=>onHandleDraw()}/>
        <IconText title="icon add text" className="cursor-pointer" onClick={()=>onHandleAddText()}/>
    </div>
        
    </>
  )
}

export default ToolOptions ;