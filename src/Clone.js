import React from 'react'
import './Form.css';
 const Clone = ({value,toggle}) => {
  return (
    <>
    <div id='bottomcontainer'>
                    {value.map((item, index) => {
                        console.log(item);
                        return (
                            <div key={index} id='data'>
                                <h5 id='mini'>Name: {item.name}<span>||</span>Department: {item.dept}<span>||</span>Rating: {item.rating}</h5>
                            </div>
                        )
                    })}
                    
                </div>
                <button onClick={toggle} id='back'>Go Back</button>
    </>
    
  )
}
export default Clone;
