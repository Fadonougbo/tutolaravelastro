import { useEffect, useState } from "react"


const getHexColor=()=> {
    const hexValue=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']

    let color='#';

    for(let i=1;i<=6;i++) {
        const index=Math.floor(Math.random()*15) 
        color +=hexValue[index]
    }
    return color
}

export const Color=({defaultcolor})=> {

   const [color,setColor]=useState(defaultcolor)

   useEffect(()=> {
    console.log('mount')
   })
    
    const handleClick=()=> {

        const newColor=getHexColor()

        setColor(()=>newColor)

    }

    return <div>
        <button onClick={handleClick} type="button" >change</button>
        {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
        <span style={{width:'100px',height:'100px',display:'inline-block',background:color}} ></span>
    </div>
}

export const Country=({children,first,second})=> {

    return <ol>
            {first}
            {second}
        <li>Benin</li>
        {children} 
    </ol>
}