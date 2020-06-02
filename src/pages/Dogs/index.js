import React, { Component } from 'react'
import './styles.css'

import moment from "moment";

import DogImage from '../../components/DogImage'
import SelectBreed from '../../components/SelectBreed'


export default class Dogs extends Component {
  
  state = {
    breedList: null,
    selectedBreed: null,
    name: localStorage.getItem('ls.name') || '',
    font: localStorage.getItem('ls.font' ) || '',
    color: localStorage.getItem('ls.color') || '',
    cores: [
      {id: "black", name: 'Preto'},
      {id: "red", name: 'Vermelho'},
      {id: "blue", name: 'Azul'},
      {id: "yellow", name: 'Amarelo'},
      {id: "green", name: 'Verde'}
    ],
    fonts: [
      {id: "Roboto", name: 'Roboto'},
      {id: "Poppins", name: 'Poppins'},
      {id: "Lora", name: 'Lora'},
      {id: "Nunito", name: 'Nunito'},
      {id: "Play", name: 'Play'}
    ],
    date: moment().format("DD-MM-YYYY"),
    time: moment().format("hh:mm:ss")
  }

  componentDidMount() {
    document.getElementsByClassName("nome")[0].style.color = localStorage.getItem('ls.color')
    document.getElementsByClassName("nome")[0].style.fontFamily = localStorage.getItem('ls.font')
    this.fetchAllBreeds();
  }

  fetchAllBreeds = async () => {
    try { 
     const response = await fetch('https://dog.ceo/api/breeds/list/all');
     if (response.ok) { 
        const data = await response.json();
          this.setState({
            breedsList: Object.keys(data.message)
         })} 
    }catch(e) { 
        alert('Erro na requisição')
      }
    }
    selectHandler = (breed) => {
        this.setState({
            selectedBreed: breed
        })
    }    
    handleForm = (event) => {
      event.preventDefault()
      alert("Sucesso ao salvar!")
      localStorage.setItem('ls.name', this.state.name)
      localStorage.setItem('ls.breed', this.state.selectedBreed)
      localStorage.setItem('ls.color', this.state.color)
      localStorage.setItem('ls.font', this.state.font)
      localStorage.setItem('ls.date', this.state.date)
      localStorage.setItem('ls.time', this.state.time)

    }
    
    clearStorage = (event) => {
      event.preventDefault()
      localStorage.clear()
    }

    changeFont = (event) => {
      this.setState({font: event.target.value})
      document.getElementsByClassName("nome")[0].style.fontFamily = event.target.value
    }

    changeColor = (event) => {
      this.setState({color: event.target.value})
      document.getElementsByClassName("nome")[0].style.color = event.target.value
    }
  

  render() {

    return(
      <div className="dog-container">
        <div className="content">
          <section className="dog-section"> 
              <form onSubmit={this.handleForm}>

                <input placeholder="Nome do Cão" type="text"
                  value={this.state.name}
                  onChange={e => this.setState({name: e.target.value})}
                />
      
                <SelectBreed breedsList={this.state.breedsList}
                  onSelect={this.selectHandler} 
                />

                <div className="input-group">
                  <select value={this.state.color}
                   onChange={this.changeColor}>   
                   
                    <option value="" disabled>Cor</option>

                    {this.state.cores.map((item, index) => (
                      <option key={index} value={item.id}>{item.name}</option>
                    ))}

                  </select>
                              
                  <select value={this.state.font}
                   onChange={this.changeFont}>
                    
                  <option value="" disabled>Fonte</option>

                    {this.state.fonts.map((item, index) => (
                      <option key={index} value={item.id}>{item.name}</option>
                    ))}        
                  </select>  
                </div>

                <h1 className="nome">Nome: {this.state.name}</h1>
                
                <button className="button" type="submit">Salvar Dados</button>

              </form>

              <DogImage breed={this.state.selectedBreed} />

              <button className="button" onClick={this.clearStorage}
                href="">Clique para limpar a Storage
              </button>
            </section>
          </div>
      </div>
    );
  }
}