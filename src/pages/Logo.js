import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo_brush.png'
const Logo = () => {
  const navigate = useNavigate()
  return (
    <div className='headerHtml'>
      <img src={logo} alt="" />
      <h3>Graphic Design</h3>
      <p>Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.</p><br />
      <button onClick={() => navigate(-1)}>Turn Back</button>
    </div>
  )
}

export default Logo