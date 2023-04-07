import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
 
const data = [
     {
        frontend: [
            {
                id:1,
                skillName:'',
                skillLevel:'',
            },
            {
                id:1,
                skillName:'',
                skillLevel:'',
            },
            {
                id:1,
                skillName:'',
                skillLevel:'',
            },
        ],
        backend: [
            {
                id:1,
                skillName:'',
                skillLevel:'',
            },
            {
                id:1,
                skillName:'',
                skillLevel:'',
            },
            {
                id:1,
                skillName:'',
                skillLevel:'',
            },
        ]
    }
]

const Experience = () => { 
    return (
        <section id='Experience'>
            <h5>What Skills Do I Have</h5>
            <h2>My Experience</h2>
            <div className="container experience-container">

                <div className="experience__fronend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                       {  
                            data[0].frontend.map(({skillName, skillLevel}) => {
                                return (
                                    <div className="experience__content">
                                     <article className='experience__details'>
                                     <BsPatchCheckFill className='expericence__details-icon' />
                                    <div>
                                      <h4>{skillName}</h4>
                                       <small className='text-light'>{skillLevel}</small>
                                     </div>
                                    </article>
                                    </div>
                                )    
                            
                             })
                          
                        }
                    </div>
                         
                    
                </div>

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                    {
                         data[0].backend.map(({skillName, skillLevel}) => {
                            return (
                                <div className="experience__content">
                                 <article className='experience__details'>
                                 <BsPatchCheckFill className='expericence__details-icon' />
                                <div>
                                  <h4>{skillName}</h4>
                                   <small className='text-light'>{skillLevel}</small>
                                 </div>
                                </article>
                                </div>
                            )    
                        
                         })
                    }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Experience