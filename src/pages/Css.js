import React from 'react'
import { useNavigate } from 'react-router-dom'
import css from '../assets/logo_css.png'
const Css = () => {
  const navigate = useNavigate()
  return (
    <div className='headerHtml'>
      <img src={css} alt="" />
      <h3>CSS3 Styling</h3>
      <p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p><br />
      <button onClick={() => navigate(-1)}>Turn Back</button>
    </div>
  )
}

export default Css