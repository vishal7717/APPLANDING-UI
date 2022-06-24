import React from 'react'

function About(props) {
    
    return (
        <div id='about'>
            <div className="about-image">
                <img src={props.image} alt={props.alt} />
            </div>
            <div className="about-text">
                <h2>{props.title}</h2>
                <p>khwab mere bas tujhse hai roshan,
                    Tere liye bechain tha main har dam,
                    Tere liye bechain tha main har dam,
                    Bechiani me bhi chain aayi is tarah,
                    Tu mera Tu mera bas mera hai mera</p>
                <button>{props.button}</button>
            </div>
        </div>
    )
}

export default About;
