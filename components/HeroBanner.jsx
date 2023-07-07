import React from 'react';
import { runFireworks } from '../lib/utils'

const HeroBanner = () => {
    return (
        <div className="hero-banner-container" onClick={() => runFireworks()}>
            <h1>Every Thing You Need To Buy!!!</h1>
        </div>
    )
}

export default HeroBanner