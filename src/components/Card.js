import React, { useState } from 'react'
import '../styles/Card.css'

const Card = () => {
  const [id, setId] = useState(' Generator')
  const [adv, setAdv] = useState('Please, touch the button below to generate an advice.')
  const generateAdv = () => {
    fetch('https://api.adviceslip.com/advice', {
      cache: 'reload'
    })
    .then(r => r.json())
    .then((data) => {
      setId(` #${data.slip.id}`)
      setAdv(`"${data.slip.advice}"`)
    })
  }

  return(
    <main>
      <div className="card">
        <div className="adv-body">
          <h5>Advice<span className="advID">{id}</span></h5> 
          <div className="advice">{adv}</div>
          <svg className="divider-desktop" width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
          <svg className="divider-mobile" width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
        </div>
        <button className="adv-generator-btn" onClick={generateAdv}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
        </button>  
      </div>
    </main>
  )
}

export default Card
