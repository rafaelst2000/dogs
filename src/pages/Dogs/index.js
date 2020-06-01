import React, { useState } from 'react'

import './styles.css'

import img from '../../dog.jpg'



export default function Dogs() {
  const [name, setName] = useState(localStorage.getItem('ls.name'))
  const [breed, setBreed] = useState(localStorage.getItem('ls.breed'))
  const [font, setFont] = useState(localStorage.getItem('ls.font'))
  const [color, setColor] = useState(localStorage.getItem('ls.color'))

  const cores = [
    {id: "black", name: 'Preto'},
    {id: "red", name: 'Vermelho'},
    {id: "blue", name: 'Azul'},
    {id: "yellow", name: 'Amarelo'},
    {id: "green", name: 'Verde'}
  ];
  const fonts = [
    {id: "Roboto", name: 'Roboto'},
    {id: "Poppins", name: 'Poppins'},
    {id: "Lora", name: 'Lora'},
    {id: "Nunito", name: 'Nunito'},
    {id: "Play", name: 'Play'}
  ];


  async function handleForm(event){
    event.preventDefault()
    alert("Cor selecionada: "+ color)
  }


  return(
    <div className="dog-container">
      <div className="content">
        <section className="dog-section">    
            <form onSubmit={handleForm}>
              <input placeholder="Nome do Cão" type="text"
              value={name}
              onChange={event => setName(event.target.value)}/>

              <select name="racas" id="racas">
                  <option value="" disabled selected>Raça</option>
                  <option value="Husky">Husky</option>
                  <option value="Pastor">Pastor Alemão</option>
                </select>  

              <div className="input-group">
              <select value={color} onChange={e => setColor(e.target.value)}>
                <option value="" disabled selected>Cor</option>
                {cores.map((item, index) => (
                  <option value={item.id}>{item.name}</option>
                ))}        
              </select>
                           
              <select value={font} onChange={e => setFont(e.target.value)}>
                <option value="" disabled selected>Fonte</option>
                {fonts.map((item, index) => (
                  <option value={item.id}>{item.name}</option>
                ))}        
              </select>
                  
              </div>

              <h1>Nome: {name}</h1>
              <div className="dogImg">
                <img src={img} height="200" width="200" alt="cachorro"/>
              </div>
              <button className="button" type="submit">Enviar</button>
            </form>
          </section>
        </div>
    </div>
  )
}
 

