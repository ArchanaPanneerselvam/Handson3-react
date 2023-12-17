import React, { Component,useState } from 'react'
import './Form.css';
import Clone from './Clone';

const Form=()=>{
     const [name,setName]=useState("");
     const [dept,setDept]=useState("");
     const [rating,setRating]=useState("");
     const [data,setData]=useState([]);
     const [click,setClick]=useState(true);


    const handleChange=(e)=>{
        console.log(e);
        setName(e.target.value);
        setDept(e.target.value);
        setRating(e.target.value)
     }
      
     const handleSumbit = () => {
        const obj = {
            name: name,
            dept: dept,
            rating: rating
        }
        const value=[...data,obj]
        // console.log(value);
        setData(value)
        setClick(false)
    }
    const togglefunction=()=>{
        setClick(!click)
    }
    return (
       <div>
         {click?(
             <>
        
             <h1>EMPLOYEE FEEDBACK FORM</h1>
             <div id='container'>
              
                 <label>Name :</label>
                 <input type="text" name='name' id='box' placeholder="Enter Your Name" onChange={handleChange} /><br /><br />
                 <label>Department :</label>
                 <input type="text" name='dept' id='box1' placeholder="Enter Your dept" onChange={handleChange} /><br /><br />
                 <label>Rating :</label>
                 <input type="text" name='rating' id='box2' placeholder="Enter Your rating" onChange={handleChange} /><br /><br />
                 <button onClick={handleSumbit} id='submit'>Submit</button>
             </div>
             </>
             ):(
                <Clone  value={data} toggle={togglefunction}/>
             
        ) }
       </div>
       
    )


}
export default Form;




