import React from 'react'
import FeatureBox from './FeatureBox.jsx'
import Featurimage from '../images/feature_1.png';
import Featurimage1 from '../images/feature_2.png';
import Featurimage2 from '../images/feature_3.png';

 
function Feature() {
    return (
      <div id='feature'>
          <div className="a-container">
          <FeatureBox images={Featurimage} title="Easy to Use"/>
          <FeatureBox images={Featurimage1} title="Money Saving Services"/>
          <FeatureBox images={Featurimage2} title="Usability Interface"/>

          </div>
      </div>
    )
  }
export default Feature;