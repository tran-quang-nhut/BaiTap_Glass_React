import React, { Component } from 'react'
import ListGlassBox from './ListGlassBox'
import { dataGlass } from '../../data/DataGlass'
import LiveView from './LiveView'

export default class ChooseGlassBox extends Component {
    state  = {
        glass:{
            desc: "",
            name: "",
            url: ""  
        }
    }
    
  render() {
    return (
            <div className="content mx-5 px-5">
                <LiveView glass={this.state.glass} />
                <ListGlassBox dataGlass={dataGlass} changeGlassInfor={this.changeGlassInfor}/>
        </div>
    )
  }
  changeGlassInfor=(glass)=>{
    this.setState({
        glass:glass
    })
    console.log('state',this.state);
}
}
