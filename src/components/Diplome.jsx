import React from 'react'


import diplome from '../datas/Diplome'






export default function Diplome(){


    return  diplome.map(function(diplome) {
        return(
           <div key={diplome.diplome}>
               <span className='dates'>{diplome.dates}</span>
               <div className={diplome.direction} key={diplome.direction}>
                   <span className='titre-dip'>{diplome.diplome}<br/></span>
                   <span><b><i>{diplome.lieu}</i></b></span>
               </div>

           </div>

        )
    })





}
