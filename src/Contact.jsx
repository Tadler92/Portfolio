import Image from './images/Headshot1.jpg'
import cap1Img from './images/awards_draft_img.png'
import cap2Img from './images/jobly_img.png'
import './Contact.css'
import Project from './Project';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  fab, 
  faLinkedin, 
  faGithub, 
  faInstagram, 
  faFacebookMessenger
} from '@fortawesome/free-brands-svg-icons'
import {faPhone, faEnvelope, faSms} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  // console.log('Font Awesome Brands', fab);
  return (
    <div className='Contact'>
      <div className='Contact-top'>
        <div className='Contact-info'>
          <h1 className='Contact-header'>Contact Me</h1>
          <p className='mt-4'>
            If you wish to contact me, please do so using any of the below options.
          </p>

          <h3 className='mt-5'>Phone:</h3>
          <p>
            <FontAwesomeIcon icon={faPhone} /> <a href='tel:3372805995'>
              (337) 280-5995
            </a>
          </p>
          <p>
            <FontAwesomeIcon icon={faSms} /> <a href='sms:3372805995'>
              (337) 280-5995
            </a>
          </p>

          <h3 className='mt-5'>Email:</h3>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> <a href='mailto:taduhon1485@gmail.com'>
              taduhon1485@gmail.com
              </a>
          </p>

          <figure className='Contact-socials mt-5'>
            <figcaption className='mb-4'>Social Media:</figcaption>
            <ul className='Contact-list'>
              <li>
                <a 
                  className='btn btn-sm btn-outline-primary' 
                  href="https://www.linkedin.com/in/trevor-duhon/"
                  target='_blank'
                >
                  {/* <FontAwesomeIcon icon={['fab', 'linkedin']} /> */}
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a 
                  className='btn btn-sm btn-outline-primary'
                  href="https://github.com/Tadler92"
                  target='_blank'
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a 
                  className='btn btn-sm btn-outline-primary'
                  href="https://ig.me/m/tadler92"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a 
                  className='btn btn-sm btn-outline-primary'
                  href="https://m.me/tadler92"
                  target='_blank'
                >
                  <FontAwesomeIcon icon={faFacebookMessenger} />
                </a>
              </li>
            </ul>
          </figure>
        </div>
        {/* <div className='Contact-img'>
          <img src={Image} />
        </div> */}
      </div>
      {/* <p className='Contact-bio mt-3'>
        I am a recent student of the Springboard Bootcamp, and had a focus on full-stack software development.  Through the bootcamp, I learned JavaScript, Python, Flask, Node.js, Express, PostgreSQL, React, and many other programming languages and libraries. Below are a few of the projects I've worked on or created to showcase my abilities with the various programming languages I've learned.
      </p> */}
    </div>
  )
};


export default Contact;