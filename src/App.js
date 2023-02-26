import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import img1 from './img1.png';
import logo from './logo.png'
function App() {

  const [showNav, setShowNav] = useState(true)

  return <div className={`body-area${showNav ? ' body-pd' : ''}`}>
    <header className={`header${showNav ? ' body-pd' : ''}`}>
    

      <div className="header_toggle">
      
        <i
          className={`bi ${showNav ? 'bi-x' : 'bi-list'}`}
          onClick={() => setShowNav(!showNav)} />
      </div>
   
      <div className="header_img">
      
        <img
          src={img1}
          alt="Clue Mediator" />
      </div>
    </header>
    <div className={`l-navbar${showNav ? ' show' : ''}`}>
      <nav className="nav">
        <div>
          <a href="#" target="_blank" className="nav_logo">
            <i className='bi bi-alexa nav_logo-icon' /> <span className="nav_logo-name">
              <img src={logo} className="logo"/>
            </span>
          </a>
          <div className="nav_list">
            <a href="#" target="_blank" className="nav_link">
              <i className='bi bi-people nav_icon' /><span className="nav_name">Dashboard</span>
            </a>
            <a href="#" target="_blank" className="nav_link">
              <i className='bi bi-person-check nav_icon' /><span className="nav_name">Courses</span>
            </a>
            <a href="#" target="_blank" className="nav_link">
              <i className='bi bi-person-check nav_icon' /><span className="nav_name">Live Courses</span>
            </a>
            <a href="#" target="_blank" className="nav_link">
              <i className='bi bi-person-check nav_icon' /><span className="nav_name">Messages</span>
            </a>
            <a href="#" target="_blank" className="nav_link">
              <i className='bi bi-person-check nav_icon' /><span className="nav_name">Setting</span>
            </a>
          </div>
        </div>
        <a href="#" target="_blank" className="nav_link">
          <i className='bi bi-box-arrow-left nav_icon' /><span className="nav_name">SignOut</span>
        </a>
      </nav>
    </div>
    <div className="pt-4 pb-4">
      <h1> Write the content here</h1>
    </div>
  </div>
}

export default App;