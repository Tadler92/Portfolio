import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './NavBar'

import Home from './Home'
import ProjectDescription from './ProjectDescription'
import Contact from './Contact'
import './App.css'
import projects from './projectData'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)
  const cap1Project = projects.awardsDraft;
  const reactProject = projects.joblyFrontend;

  return (
    <>
      <div>
        <BrowserRouter basename='/Portfolio'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/move-awards-draft' 
            element={<ProjectDescription
              projectName={cap1Project.name} 
              projectDescription={cap1Project.description}
              projectURL={cap1Project.url}
              skills={cap1Project.skills}
              paragraph1={cap1Project.paragraph1}
              paragraph2={cap1Project.paragraph3}
              paragraph3={cap1Project.paragraph32}
              gitLink={cap1Project.gitURL}
            />}
          />
          <Route path='/react-jobly' 
            element={<ProjectDescription
              projectName={reactProject.name}
              projectDescription={reactProject.description}
              projectURL={reactProject.url}
              skills={reactProject.skills}
              paragraph1={reactProject.paragraph1}
              paragraph2={reactProject.paragraph3}
              paragraph3={reactProject.paragraph32}
              gitLink={reactProject.gitURL}
            />}
          />
          <Route path='/contact-me' element={<Contact />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
