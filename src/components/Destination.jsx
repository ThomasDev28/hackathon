import React, { useState,useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom";
import './Destination.css'

export default function Destination() {
    const params = useParams();
    const history = useHistory();
    
    const selectPlanets = (name) => {
        window.scroll(0, 0);
        history.push(`/cartes/${name}`);
      };

    return (
        <div className="container-destination">
            <img onClick={() => selectPlanets('mercure')} src="img/mercure.jpg" alt="mercure" />
            <img onClick={() => selectPlanets('venus')} src="img/venus.jpg" alt="venus" />
            <img onClick={() => selectPlanets('earth')} src="https://blog.iakaa.com/wp-content/uploads/2014/10/google-earth-1.jpg" alt="earth" />
            <img onClick={() => selectPlanets('mars')} src="img/mars.jpg" alt="mars" />
            <img onClick={() => selectPlanets('jupiter')} src="https://www.astrofiles.net/sites/default/files/2019-05/jupiter.png" alt="jupiter" />
            <img onClick={() => selectPlanets('saturn')} src="https://www.neozone.org/blog/wp-content/uploads/2020/11/saturne-001-1-780x470.jpg" alt="saturn" />
            <img onClick={() => selectPlanets('neptune')} src="img/neptune.jpg" alt="neptune" />
            <img onClick={() => selectPlanets('uranus')} src="img/uranus.jpg" alt="uranus" />
        </div>
    )
}
