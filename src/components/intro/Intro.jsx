import React from 'react'
import './intro.css';
import Me from '../../img/me.png'

const Intro = () => {
    return (
        <div className = "i">
          <div className="i-left"> 
          <div className="i-left-wrapper">
              <h2 className ="i-intro">Hello, My Name is</h2>
              <h1 className = "i-name">Bashiir Awdiini</h1>
              <div className="i-title">
              <div className="i-title-warrper">
                  <div className="i-title-item">Web Developer</div>
                  <div className="i-title-item">Web Designer</div>
                  <div className="i-title-item">Mobile Developer</div>
                  <div className="i-title-item">Graphic Designer</div>
                  
                  </div>
              </div>
              <p className="i-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum officia inventore assumenda deserunt mollitia quos, iste, reprehenderit.
              </p>
          </div>
          </div>

          
              <div className="i-right">
                  <div className="i-bg"></div>
                  <img src={Me} alt="" className = "i-img"/>
              </div>
          </div>
            
      
    )
}

export default Intro
