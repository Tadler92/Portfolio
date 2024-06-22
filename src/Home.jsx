import Image from './images/Headshot1.jpg'
import cap1Img from './images/awards_draft_img.png'
import cap2Img from './images/jobly_img.png'
import './Home.css'
import Project from './Project';

const Home = () => {
  return (
    <div className='Home d-flex justify-content-center'>
      <div>
        <div className='Home-top'>
          <div className='Home-info'>
            <h1>Trevor Duhon</h1>
            <p>Full Stack Software Developer.</p>
            <figure>
              <figcaption>Contact Info:</figcaption>
              <ul className='Home-list'>
                <li>Phone: 337-280-5995</li>
                <li>Email: taduhon1485@gmail.com</li>
              </ul>
            </figure>
          </div>
          <div className='Home-img'>
            {/* <img src="./images/Headshot1" /> */}
            <img src={Image} />
          </div>
        </div>
        <p className='Home-bio mt-5'>
          I am a recent student of the Springboard Bootcamp, and had a focus on full-stack software development.  Through the bootcamp, I learned JavaScript, Python, Flask, Node.js, Express, PostgreSQL, React, and many other programming languages and libraries. Below are a few of the projects I've worked on or created to showcase my abilities with the various programming languages I've learned.
        </p>
      {/* </div> */}

      <div className='Home-projects'>

        <hr id='first-hr' className='Home-line my-5' />

        <Project 
          projectName='Movie Awards Draft'
          projectDescription='Capstone 1 Project for Springboard bootcamp.'
          projectURL='https://awards-draft.onrender.com'
          skills={['Python', 'Flask', 'Jinja', 'PostgreSQL', '+ Many More...']}
          pathname='/move-awards-draft'
          projectImg={cap1Img} 
        />

        <hr className='Home-line my-5' />

        <Project 
          projectName='React Jobly Frontend'
          projectDescription='Springboard Project creating a React frontend for a pre-made backend.'
          projectURL='https://jobly-react-jfbk.onrender.com/'
          skills={['React', 'JavaScript', 'HTML', 'CSS', '+ Many More...']}
          pathname='/react-jobly'
          projectImg={cap2Img} 
        />
        </div>
      </div>
    </div>
  )
};


export default Home;