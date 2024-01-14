import React, { useEffect } from 'react';
 
import { useNavigate } from 'react-router-dom';
export default function Example() {
  const changePage = useNavigate();
  useEffect(()=>{
    changePage('/login')

  },[])
 
  return (
    <div className="bg-white">
      
    </div>
  )
}
