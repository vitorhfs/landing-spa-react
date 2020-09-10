import React from 'react';
import mower from '../../images/lawn-mower.jpg'
import tractor from '../../images/lawn-tractor.jpg'
import robot from '../../images/lawn-robot.jpg'

const Services = () => {
    return (
        <div className="services-container">
            <h3>WE PROVIDE THREE DIFFERENT KINDS OF GRASS MOWNING.</h3>
            <br />
            <div className="mowning-types">
            <img src={mower} alt="simple mower"/>
            <h2>Simple Mower</h2>
            <p>We provide the simple service to machine mown your tall grass with high efficiency and at a satisfying amount of time. You can also call multiple employees to handle your grass faster.</p>
            <br/>
            <img src={tractor} alt="tractor mower"/>
            <h2>Tractor Mower</h2>
            <p>The tractor mower is recommended for huge fields of grass, by contracting the tractor service, our mower will slice all of your grass with machine precision and factory standards excellency. It takes only one of our employees to execute such a job.</p>
            <br/>
            <img src={robot} alt="robot mower"/>
            <h2>Robot Mower</h2>
            <p>If you don't need a very fast service, but still a beautiful cut grass with no headaches, you can call our robot to do the job, it only takes a couple minutes to set it up and the robot do all the job. You can also call to us to take care off your lawn clippings.</p>
        </div>
        </div>
    )
}

export default Services;