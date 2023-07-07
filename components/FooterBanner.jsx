import React from 'react';
import { runFireworks } from '../lib/utils'

const FooterBanner = () => {
    return (
        <div className="footer-banner-container" onClick={() => runFireworks()}>
            <h1>Stay at HOME! Buy at HOME!</h1>
        </div>
    )
}

export default FooterBanner