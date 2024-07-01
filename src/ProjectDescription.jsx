import { v4 as uuid } from 'uuid';

import Image from './images/Headshot1.jpg'
import './ProjectDescription.css'
import { Link } from 'react-router-dom';

const ProjectDescription = ({projectName, projectDescription, projectURL, skills, paragraph1, paragraph2, paragraph3, gitLink}) => {
  return (
    <>
      <div className='ProjectDescription d-flex justify-content-center'>
        <div className='ProjectDescription-info'>
          <h1>{projectName}</h1>
          <p className='mt-3'>{projectDescription}</p>

          <a className='btn btn-warning my-5' href={projectURL} target='_blank'>
            Check out project site
          </a>

          {/* <p>Paragraph 1: Explain Project</p> */}
          <h4>Explanation of Project:</h4>
          <p className='ProjectDescription-p'>{paragraph1}</p>

          {/* <p>Paragraph 2: List/Explain Technologies Used</p> */}
          <figure className='mt-5'>
            <figcaption>Technology Stack Used To Create Site:</figcaption>
            <ul className='ProjectDescription-list'>
              {skills.map( skill => (
                <li key={uuid()}>{skill}</li>
              ))}
            </ul>
          </figure>

          {/* <p>Paragraph 3: Explain what I did on the project</p> */}
          <h4 className='mt-5'>What I did:</h4>
          <p className='ProjectDescription-p'>{paragraph2}</p>
          <p className='ProjectDescription-p'>{paragraph3}</p>

          <h4 className='mt-5'>More Information, Next Steps:</h4>
          <p className='ProjectDescription-p'>If you would like to try out the site yourself, you can click the button above, or if you'd like to see more of the code I used to create the site and check out my app's README, you can head over to my GitHub by clicking the button below.  Finally, if you'd like to contact me about this project or something else entirely, then you can click on the "Contact Me" link in the NavBar, or see my contact detail on the Homepage.</p>
          {/* <figure>
            <figcaption>Technology/Skills Used To Create Site:</figcaption>
            <ul>
              {skills.map( skill => (
                <li>{skill}</li>
              ))}
            </ul>
          </figure> */}
          {/* <button>Learn more about Project</button> */}
          <a className='btn btn-light my-5' href={gitLink} target='_blank'>
            Learn more about Project
          </a>
        </div>
        {/* <div className='Project-img'>
          <img src="./images/Headshot1" />
          <img src={Image} />
        </div> */}
      </div>
    </>
  )
};


export default ProjectDescription;