import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'
import {offspring} from './db.js'

// is there a way we could associate eye color string values with images? 
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

export default class BabyHog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      weight: props.weight,
      hobby: props.hobby
    }
  }
    

  changeWeight = (e) => {
    // nothing needs to change here
    const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    this.setState({
      weight: newWeight
    })
  }

  showEyeColorPicture = (eyeColorPictures) => {
    console.log(this.props.eyecolor)
    if (this.props.eyecolor === 'sun') {
      return eyeColorPictures.sun
    } else if (this.props.eyecolor === 'glowing') {
      return eyeColorPictures.glowing
    } else {
      return eyeColorPictures.blue
    }
  }

  eyeColorPictures = {
    blue: <img src={BlueBaby} style={{height: '200px'}} alt="MasterBlasterJrJr" />,
    sun: <img src={SunBaby} style={{height: '200px'}} alt="MasterBlasterJrJr" />,
    glowing: <img src={GlowingBaby} style={{height: '200px'}} alt="MasterBlasterJrJr" /> 
  }

  render() {
    return (
      <li className="hogbabies">
        <h1>Name: {this.props.name}</h1>
        <h3>Weight: {this.props.weight}</h3>
        <h3>Hobby: {this.props.hobby}</h3>
        <h4>Eye Color: {this.props.eyecolor}</h4>
          
        <Button name="+" onClick={this.changeWeight}>
          Increase Weight
        </Button>
        <Button name="-" onClick={this.changeWeight}>
          Decrease Weight
        </Button>
        

        <div className="hb-wrap">
          {this.showEyeColorPicture(this.eyeColorPictures)}
        </div>
        
      </li>
    )
  }
}
