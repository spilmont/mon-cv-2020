import React from 'react'
import axios from 'axios'



export default class Contact extends React.Component{


    constructor(){
        super()
        this.state={
            'sender':'',
            'email':'',
            'cc':'',
            'message':'',
            'class':'none',
            'alertMessage':''
        }
    }






       handleSubmit= async (e)=>{

        e.preventDefault()








        const {sender,email,cc, message} = this.state

          axios({
               method: "POST",
               url:"http://localhost:3001/send",
              headers:{
                'Accept':'Application/json',
                'Content-Type':'Application/json'
              },
               data: {
                   sender:sender,
                   to:'andre-spilmont@hotmail.com',
                   subject:cc,
                   email: email,
                   text: message
               }
           })

           this.setState({class:'alert alert-success alertMessage',
               alertMessage:'Le message est envoyé'   })






       };







    handleChange= (e)=>{

        this.setState({[e.target.name]:e.target.value})
    };

    render() {


    return(
        <div className='message-box'>
   <form className='column' onSubmit={this.handleSubmit} method='post' >
       <input className='mb2pc form-control' type='text' name='sender' placeholder='  saisir votre nom' onChange={this.handleChange}/>
       <input className='mb2pc form-control' type='email' name='email' placeholder='  saisir votre adresse email' onChange={this.handleChange} />
       <input type='text' className='mb2pc form-control' name='cc' placeholder='saisir le sujer de votre message' onChange={this.handleChange} />
       <textarea className='mb2pc form-control' name='message' placeholder='  saisir vore message' onChange={this.handleChange} />
       <input type='submit' className='btn btn-primary' value='envoyer'/>
   </form>
   <div className={this.state.class} role='alert'>
       {this.state.alertMessage}
   </div>

        </div>)

}


}
