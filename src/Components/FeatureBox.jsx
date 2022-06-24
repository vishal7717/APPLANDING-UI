import React from 'react'

function FeatureBox(props) {
    return (
      <div className='a-box'>
          <div className='a-b-img'>
              <img src={props.images}/>
              </div>
              <div className="s-b-text">
                  <h2>{props.title}</h2>
                  <p>Tu mera Tu mera bas mera hai mera,Tu mera Tu mera bas mera hai mera</p>
              </div>
  
      </div>
    )
  }
 

export default FeatureBox;