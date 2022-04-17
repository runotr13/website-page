import React from 'react'
import { useNavigate } from 'react-router-dom'
import html from '../assets/logo_html.png'
import './Html.css'

const Html = () => {
  const navigate = useNavigate()
  return (
    <div className='headerHtml'>
      <img src={html} alt="" />
      <h3>HTML5 Markup</h3>
      <p>Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.</p><br />
      <button onClick={() => navigate(-1)}>Turn Back</button>
    </div>
  )
}

export default Html