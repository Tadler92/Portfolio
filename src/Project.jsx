import { v4 as uuid } from 'uuid';
import Image from './images/Headshot1.jpg'
import './Project.css'
import { Link, useNavigate } from 'react-router-dom';

const Project = ({projectName, projectDescription, projectURL, skills, pathname, projectImg, projectType}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className='Project'>
        <div className='Project-info'>
          <h3>{projectType}</h3>
          <p>Name: {projectName}</p>
          <p>Description: {projectDescription}</p>
          {/* <Link to={projectURL} target='_blank' /> */}
          {/* <a href={projectURL} target='_blank'>Check out project site</a> */}

          <button className='btn btn-warning mb-3' onClick={() => navigate(pathname)}>
            Learn more about Project
          </button>

          <figure>
            <figcaption>Technology/Skills Used To Create Site:</figcaption>
            <ul>
              {skills.map( skill => (
                <li key={uuid()}>{skill}</li>
              ))}
              {/* <li>Python</li>
              <li>Flask</li>
              <li>Jinja</li>
              <li>PostgreSQL</li>
              <li>+ Many More...</li> */}
            </ul>
          </figure>

          <a href={projectURL} target='_blank'>
            Check out project site
          </a>

          {/* <button className='btn btn-warning mb-3' onClick={() => navigate(pathname)}>
            Learn more about Project
          </button> */}
          {/* <button {<Link to={projectURL} target='_blank' />}>Check out project site</button> */}
        </div>
        <div className='Project-img'>
          <small>Example image of project:</small>
          <img src={projectImg} />
        </div>
      </div>
    </>
  )
};


export default Project;