import React from 'react'


import Project from '../datas/Realisation'





export default function Realisation(){









    return  Project.map(function(realisation) {
        return(
            <div className='realisation-box wow  fadeIn  ' key={realisation.name}>
                <img className='realisation-images' src={realisation.image} alt={realisation.name}/>
                <h4 className='z-index wow rubberBand '>{realisation.name}</h4>
                <div className=' z-index wow rubberBand'>{realisation.techno}</div>
                <a className=' z-index link-real wow rubberBand' href={realisation.url}>visiter</a>
            </div>
        )
    })





}
