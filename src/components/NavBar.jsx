/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

let logoRef;
let navRef;

const handleLogoClick = evt => {
    evt.preventDefault();
    if (navRef) {
        navRef.className = (navRef.className === 'nav') ? 'nav active' :  'nav';
    }
}

export default (props) => (
    <nav className="header">
        <div className="header__content flex justify-content__sb">
            <div className="flex justify-content__sb">
                <div className="logo rounded-edges" ref={(div) => { logoRef = div; console.log(logoRef)} } onClick={handleLogoClick}>
                    <a href="/" title="Home"></a>
                </div>
                <a href="/" className="logo__text">SendIT</a>
            </div>
            <div className="nav" id="nav" ref={(nav) => { navRef = nav; }}>
                <ul className="menu flex align-items__center justify-content__sb">
                    <li className="menu__item">
                        <a href="/signin">Sign In</a>
                    </li>
                    <li className="menu__item">
                        <a href="/signup">Sign Up</a>
                    </li>
                </ul>
            </div>
         </div>
    </nav>
);
