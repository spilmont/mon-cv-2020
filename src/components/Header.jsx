import React from 'react'
import headerNature  from '../images/nature-header.jpg'


export default class Header extends React.Component{

 state={
     name:'André Spilmont',

 }





     onMouseEnter=()=> {

        this.setState({name: " alias Onatouvus"})
    }

    onMouseLeave=()=>{
        this.setState({name:'André Spilmont'})
    }






    render() {




    return (<header id='header'>
        <img className='natureHeader' src={headerNature} alt='fonds de header'/>
        <h1 id='maintitre' onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>{this.state.name}</h1>
        <h2> Développeur web </h2>
        <div className='icon-scroll'/>


    </header>)
}

}
