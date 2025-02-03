import { useEffect, useState } from "react"


export const DayDate=({name,children,menuslot})=> {

    const currentDate=new Date().toLocaleString()
    const [date,setDate]=useState('no date form moment')

    const handleClick=()=> {
        const newDate=new Date().toLocaleString()
        setDate(()=>newDate)
    }

    useEffect( ()=> {
       
        fetch('http://localhost:8000/api/test').then(res=>res.json() ).then(data=>console.log(data))
    },[])
  
      

    return <>
        <span>{date} {name}</span>
        <button onClick={handleClick} type="button" >change date</button>
        {children} {menuslot}
    </>
}