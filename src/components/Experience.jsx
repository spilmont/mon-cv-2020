import React from 'react'


import experience from '../datas/Experience'






export default function Diplome(){


    return  experience.map(function(experience) {
        return(
            <div className='center-mobile' key={experience.poste}>
                <span className='dates'>{experience.dates}</span>
                <div className={experience.direction}>
                    <span className='titre-dip'>{experience.poste}</span><br/>
                    <span><i><b>{experience.lieu}</b></i></span><br/>
                    <span>{experience.travaux}</span>
               </div>

            </div>

        )
    })





}
