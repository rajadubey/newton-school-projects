import React from 'react'
import { Link } from 'react-router-dom'
import './projectCard.css'
export default function ProjectCard({project}) {


    const openLinkInAnotherTab = (url) =>{
        console.log('psp');
        var win = window.open(url, '_blank');
        win.focus();
    }


    return (
        <div className='project-card'>
           <div className='poster' >
               <img src={project.poster} alt='poster' width={'400px'} height={'200px'}/>
           </div>
           <div className='description'>
               <div className="title">
                   <span>{project.title}</span>
               </div>

               <div className="description-text"> {project.description} </div>
               
               <div className="tech">
                    {project.techStack.map((el,index)=> <p key={index}>{el}</p> )}
               </div>
               
               <div className="links-button">
                <button onClick={()=>openLinkInAnotherTab(project.hostedLink)}>
                    Open
                </button>
                <button onClick={()=>openLinkInAnotherTab(project.codeLink)}>
                    code
                </button>    
               </div>
           </div>
        </div>
    )
}
