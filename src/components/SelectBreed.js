import React, { useState } from 'react'


export default function SelectBreed(props){
    
    const [breed, setBreed] = useState(localStorage.getItem('ls.breed') || 'Raça')   
    
    const handleChange = (event) => {
        setBreed(event.target.value) 
        props.onSelect(event.target.value)
        
    } 
    const getSelectView = () => {
        return (
            <select value={breed} onChange={handleChange}>
                <option disabled >Raça</option>
                {props.breedsList.map((breed, index) => {
                    return(
                        <option key={index} value={breed}>{breed}</option>
                    );
                })}
            </select>
        );
    }

  return(
    <div>
      {props.breedsList ? getSelectView() : null}
    </div>     
     
  )
}