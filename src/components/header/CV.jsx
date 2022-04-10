import React from 'react'
const cv = "https://docs.google.com/document/d/1JzRLnIAy7dcMivaH_nbSP-8mAITZPfb-/edit?usp=sharing&ouid=108754402425116319517&rtpof=true&sd=true";

const CV = () => {
  return (
    <div className="cv">
        <a href={cv} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CV