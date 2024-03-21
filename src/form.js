import { useState } from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Atm(props){
    let choice=["Deposit","cashback"]
    const [amt,setAmt]=useState('')
     function handleChange(e){
       e.preventDefault()
       setAmt(e.target.value)

     }   
    
    function handleSubmit(e){
        e.preventDefault()
        props.transac(amt)
        console.log(amt)
    }
    return(<><form onSubmit={handleSubmit}>
        <input type="number" onChange={handleChange}></input> 
        <Button type="submit">{choice[Number(!props.isDep)]}</Button>
        
        
        </form></>)
}