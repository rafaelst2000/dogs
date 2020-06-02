import React, { Component} from 'react'

export default class DogImage extends Component{
  state = {
    imageUrl: localStorage.getItem('ls.image'),
    selectedBreed: null
  }
  
  componentDidUpdate() {
    if (this.props.breed !== this.state.selectedBreed) {
      this.setState({
        selectedBreed: this.props.breed
      })
      this.fetchImage()
    }   
  }

  fetchImage = async () => {
    const response = await fetch(
      `https://dog.ceo/api/breed/${this.props.breed}/images/random`
    );
    const data = await response.json();
    const imageUrl = data.message
    this.setState({
      imageUrl: imageUrl
    })
    localStorage.setItem("ls.image", imageUrl)
  }

  render(){
    return(
      <div className="dogImg">
          <img src={this.state.imageUrl} height="200" width="200" alt="Selecione uma Raça"/>
      </div>
    )
  }
}