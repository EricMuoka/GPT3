import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
    {
        title: 'Improving end distrusts instantly',
        text: 'From they fine john he give of rich he. They age and draw nrs like. Improving and fundamentally'
    },
    {
        title: 'Become the branded active',
        text: 'From they fine john he give of rich he. They age and draw nrs like. Improving and fundamentally'
    },
    {
        title: 'Message or am nothing',
        text: 'From they fine john he give of rich he. They age and draw nrs like. Improving and fundamentally'
    },
    {
        title: 'Really boy low county',
        text: 'From they fine john he give of rich he. They age and draw nrs like. Improving and fundamentally'
    },
    
]
const Features = ()=> {
    return(
        <div className='gpt3__features section__padding' id='features'>
            <div className='gpt3__features-heading'>
                <h1 className='gradient__text'> The Future Is Now and You Just Need To Realize It. Step into the Future Today & Make it Happen</h1>
                <p>Request Early Access To Get Started</p>
            </div>
            <div className='gpt3__features-container'>
               {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index}/>
                ))}  
            </div>
        </div>
    )
}

export default Features