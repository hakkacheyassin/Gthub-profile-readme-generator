import React from 'react';
import links from '../constants/page-links'
import { Link } from 'gatsby'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-pages">
                <div>
                    <Link to={links.about} activeStyle={{ color: "#002ead" }}>
                        About
                    </Link>
                </div>
                <div>
                    <Link to={links.addons} activeStyle={{ color: "#002ead" }}>
                        Addons
                    </Link>
                </div>
                <div>
                    <Link to={links.support} activeStyle={{ color: "#002ead" }}>
                        Support
                    </Link>
                </div>
            </div>
            <div className="footer-proud">
                 <span role="img" aria-label="india"> </span>
            </div>
        </div>
    )
}
export default Footer;