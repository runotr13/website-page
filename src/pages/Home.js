import React from 'react'
import './Home.css'
import html from '../assets/logo_html.png'
import brush from '../assets/logo_brush.png'
import css from '../assets/logo_css.png'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  const handleClick = (e) => {
    if(e.target.alt === "html") navigate('/Html')
    if(e.target.alt === "css") navigate('/Css')
    if(e.target.alt === "brush") navigate('/Logo')
  }
  return (
    <div>
      <div className="header">
        <h1>Professional Web Design</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure inventore sed iusto corrupti blanditiis unde?</p>
      </div>
      <div className="container">
        <div className="item">
            <img src={html} alt="html" onClick={handleClick} />
            <h3>HTML5 Markup</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo hic corrupti perspiciatis ducimus, commodi eos.</p>
        </div>
        <div className="item">
            <img src={css} alt="css" onClick={handleClick}/>
            <h3>CSS3 Styling</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo hic corrupti perspiciatis ducimus, commodi eos.</p>
        </div>
        <div className="item">
            <img src={brush} alt="brush" onClick={handleClick}/>
            <h3>Graphic Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo hic corrupti perspiciatis ducimus, commodi eos.</p>
        </div>
      </div>
    </div>
  )
}

export default Home