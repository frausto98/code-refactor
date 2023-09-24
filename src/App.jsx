import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'

import photoOne from '../src/images/search-engine-optimization.jpg'
import photoTwo from '../src/images/online-reputation-management.jpg'
import photoThree from '../src/images/social-media-marketing.jpg'

import photoFour from '../src/images/lead-generation.png'
import photoFive from '../src/images/brand-awareness.png'
import photoSix from '../src/images/cost-management.png'

function App() {
  

  return (
    <body>
      <div className="header">
        <h1>Hori<span className="seo">seo</span>n</h1>
        <div>
            <ul>
                <li>
                    <a href="#search-engine-optimization">Search Engine Optimization</a>
                </li>
                <li>
                    <a href="#online-reputation-management">Online Reputation Management</a>
                </li>
                <li>
                    <a href="#social-media-marketing">Social Media Marketing</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="hero"></div>
    <div className="content">
        <div id="search-engine-optimization" className="search-engine-optimization">
            <img src={photoOne} className="float-left" />
            <h2>Search Engine Optimization</h2>
            <p>
                The dominance of mobile internet use means that users are searching for the right business as they travel, shop, or sit on their couch at home. Search Engine Optimization (SEO) allows you to increase your visibility and find the right customers for your business.
            </p>
        </div>
        <div id="online-reputation-management" className="online-reputation-management">
            <img src={photoTwo} className="float-right" />
            <h2>Online Reputation Management</h2>
            <p>
                The web is full of opinions, and some of these can be negative. Social media allows anyone with an internet connection to say whatever they want about your business. Online Reputation Management gives you the control over what potential customers see when they search for your business.
            </p>
        </div>
        <div id="social-media-marketing" className="social-media-marketing">
            <img src={photoThree} className="float-left" />
            <h2>Social Media Marketing</h2>
            <p>
                Social media continues to have a sizable influence on buying habits. Social media marketing helps you determine which platforms are suited to your brand, using analytics to find the right markets and increase your lead generation.
            </p>
        </div>
    </div>
    <div className="benefits">
        <div className="benefit-lead">
            <h3>Lead Generation</h3>
            <img src={photoFour} />
            <p>
                Inbound strategies for lead generation require less work for your business, bringing customers directly to your website.
            </p>
        </div>
        <div className="benefit-brand">
            <h3>Brand Awareness</h3>
            <img src={photoFive} />
            <p>
                Users find your business through paid and organic searches, increasing the search ranking and visibility for your business.
            </p>
        </div>
        <div className="benefit-cost">
            <h3>Cost Management</h3>
            <img src={photoSix} />
            <p>
                As the search ranking for your business increases, your advertising costs decrease, and you no longer need to advertise your page.
            </p>
        </div>
    </div>
    <div className="footer">
        <h2>Made with ❤️️ by Horiseon</h2>
        <p>
            &copy; 2019 Horiseon Social Solution Services, Inc.
        </p>
    </div>
    </body>
  )
}

export default App
