import React from 'react'
import './Skills.css'
import Html from '../../images/html.png'
import Css from '../../images/css3.png'
import Js from '../../images/javascript.png'
import ReactLogo from '../../images/react.png'
import Git from '../../images/git.png'

const Skills = () => {
  return (
    <div className="container" id='skills'>
        <div className="skills_container">
            <h2>Skills</h2>
            <div className="skills_items">
                <div className="skills_item">
					<img src={Html} alt="" />
                    <p>Html</p>
                </div>
                <div className="skills_item">
					<img src={Css} alt="" />
                    <p>Css</p>
				</div>
                <div className="skills_item">
					<img src={Js} alt="" />
                    <p>Javascript</p>
				</div>
                <div className="skills_item">
					<img src={ReactLogo} alt="" />
                    <p>react</p>
				</div>
                <div className="skills_item">
					<img src={Git} alt="" />
                    <p>Git</p>
				</div>
            </div>
        </div>
    </div>
  )
}

export default Skills