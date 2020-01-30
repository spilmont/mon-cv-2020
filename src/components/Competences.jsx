import React from 'react'


import Skill from '../datas/Competences'
import ProgressBar from 'react-bootstrap/ProgressBar'




export default function Competences (){



    const filterSkill = Skill.filter(Skill=> Skill.grade === 'main');



        return  filterSkill.map(function(competences) {
            return(
          <div className='skill-box wow zoomInUp' key={competences.skill}>
              <h3>{competences.skill}<span> {competences.pourcent}%</span></h3>
              <ProgressBar  now={competences.pourcent} />

          </div>
            )
        })





}
