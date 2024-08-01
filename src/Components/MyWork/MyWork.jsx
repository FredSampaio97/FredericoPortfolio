import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My latest Work</h1>
            <img src={theme_pattern} alt="" />
            
        </div>
        <div className="mywork-container">
            {mywork_data.map((work, index) => {
                return <a key={index} href={work.w_url}><img key={index} src={work.w_img} alt='' /></a>
            })}
        </div>
        <div >
            <a className="mywork-showmore" href="https://github.com/FredSampaio97?tab=repositories">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </a>
        </div>
    </div>
  )
}

export default MyWork