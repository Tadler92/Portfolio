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
                {/* <li>Phone: <a href='sms:3372805995'> => send text */}
                <li>Phone: <a href='tel:3372805995'>
                  337-280-5995
                </a></li>
                <li>Email: <a href='mailto:taduhon1485@gmail.com'>
                  taduhon1485@gmail.com
                </a></li>
              </ul>
            </figure>
          </div>
          <div className='Home-img'>
            {/* <img src="./images/Headshot1" /> */}
            <img src={Image} />
          </div>
        </div>
        <p className='Home-bio mt-5'>
          I am a graduate of the Software Engineering Bootcamp hosted by <a href='https://www.springboard.com/courses/software-engineering-career-track/'>Springboard</a>, which focused on full-stack software development.  Through the bootcamp, I learned JavaScript, Python, Flask, Node.js, Express, PostgreSQL, React, and many other programming languages and libraries. Below are projects I've worked on or created to showcase my abilities with the various programming languages I've learned.
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
          projectType='Python/Flask Project'
        />

        <hr className='Home-line my-5' />

        <Project 
          projectName='React Jobly Frontend'
          projectDescription='Springboard Project creating a React frontend for a pre-made backend.'
          projectURL='https://jobly-react-jfbk.onrender.com/'
          skills={['React', 'JavaScript', 'HTML', 'CSS', '+ Many More...']}
          pathname='/react-jobly'
          projectImg={cap2Img} 
          projectType='React Project'
        />
        </div>
      </div>
    </div>
  )
};


export default Home;