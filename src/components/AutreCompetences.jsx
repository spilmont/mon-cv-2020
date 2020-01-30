import React from 'react'


import Skill from '../datas/Competences'

import {Doughnut} from 'react-chartjs-2';


export default function Competences(){


    let filterSkill = Skill.filter(Skill => Skill.grade === 'secondary');



    return filterSkill.map(function (competences) {
        return (
            <div className='com-round wow zoomInUp' key={competences.skill}>
                <h3>{competences.skill}</h3>
                <div className='doghnut'>
                <Doughnut  data={{
                    datasets: [{
                        data: [competences.pourcent, (100 - competences.pourcent)],
                        backgroundColor: [
                            'blue',
                            'dimgrey',

                        ],
                        borderWidth: 0,

                    }]
                }} options={{
                    cutoutPercentage: 90,
                }}
                         />
                </div>
                <span className='center-round'>{competences.pourcent}%</span>
            </div>

        )
    })





}
