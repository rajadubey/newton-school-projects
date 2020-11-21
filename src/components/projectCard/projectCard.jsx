import React from 'react'
import './projectCard.css'
export default function ProjectCard({project}) {
    const techStackStyle = {
        width: `100/${project.techStack.length}`,
    };

    const openLinkInAnotherTab = (url) =>{
        console.log('psp');
        var win = window.open(url, '_blank');
        win.focus();
    }


    return (
        <div className='project-card'>
           <div className='poster' >
               <img src={project.poster} alt={`project snap @${project.title}`} />
           </div>
           <div className='description'>
               <div className='left-desc'>
               <div className="title">
                   <span>{project.title}</span>
               </div>

               <div className="description-text"> {project.description} </div>
                </div>
               <div className='right-desc'>
               <div className="tech">
                    {project.techStack.map((el,index)=>
                        <p key={index} style={techStackStyle}>{el}</p> )}
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
        </div>
    )
}
