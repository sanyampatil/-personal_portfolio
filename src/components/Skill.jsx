import React from 'react'
import ti from '../assets/ti.png'

const Skill = () => {
  return (
    <div>
      <section background='dark' id='skills'>
        <div className='skills-content-wrapper'>
          <div className='left-col'>
            <img
              src={ti}
              alt='JavaScript, React, CSS, HTML, SASS, Photoshop, Figma'
            />
          </div>
          <div className='right-col'>
            <h2>Skills</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the
            </p>
            {/* <CallToAction
              text='Download CV'
              icon={<AiOutlineCloudDownload />}
              action={() => window.open(Resume)}
            /> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skill
