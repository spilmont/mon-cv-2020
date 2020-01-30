import React from 'react'



export default function footer(){

    const date = new Date();


    return (<footer className='footer'>
       <div>
           © Copyright {date.getFullYear()} André Spilmont. Tous droits réservés
       </div>


    </footer>)


}
