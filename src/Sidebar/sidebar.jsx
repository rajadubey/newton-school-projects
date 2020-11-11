import React from 'react'
import './sidebar.css'
import jsImage from "../images/icon-javascript.svg";
import assignmentImage from "../images/icon-assignment.svg";
import reactImage from "../images/icon-react.svg";
import { Link } from 'react-router-dom';

export default function Sidebar() {


    return (
        <div className='sidebar'>
            <div className="sidebar-list">
                <div className="project-type-list" >
                    <Link to='/js' className='links'>
                        <span>
                            <img src={jsImage} alt='js-image' />
                                {'JavaScript'} 
                        </span>
                    </Link>
                </div>

                <div className="project-type-list">
                    <Link to='/react' className='links'>
                        <span> 
                            <img src={reactImage} alt='react-image' />
                            {'React'} 
                        </span>
                    </Link>
                </div>
                
                <div className="project-type-list">
                    <Link to='/others' className='links'>
                        <span>
                            <img src={assignmentImage} alt='assignment-image' />
                            {'Assignments'}
                        </span>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}
