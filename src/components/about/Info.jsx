import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bxs-hourglass about__icon' ></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">6 Month Working</span>
        </div>

        <div className="about__box">
            <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Education</h3>
            <span className="about__subtitle">+30 Certificates</span>
        </div>

        <div className="about__box">
            <i class='bx bx-briefcase-alt-2 about__icon' ></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">+10 Projects</span>
        </div>
    </div>
  )
}

export default Info;