import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
    return(
        <div className='gpt3__possibility section__padding' id='possibility'>
            <div className='gpt3__possibility-image'>
                <img src={possibilityImage} alt="possibility" />
            </div>
            <div className='gpt3__possibility-content'>
                <h4>Request Early Access To Get Started</h4>
                <h1 className='gradient__text'>The possibilities are beyound your imagination</h1>
                <p>Yet bed any for travelling indulgence uploading. Not thought all excercise blooming, Indulgence into everything joy. You think say you dey read meaningful thing, continue reading. Npa gi there, nonsense.</p>
                <h4>Request Early Access To Get Started</h4>
            </div>
        </div>
    )
}

export default Possibility