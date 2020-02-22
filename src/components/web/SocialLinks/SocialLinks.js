import React from 'react'
import {ReactComponent as IconFacebook }from '../../../assets/img/svg/facebook.svg';
import {ReactComponent as IconGithub} from '../../../assets/img/svg/github.svg'
import {ReactComponent as IconLinkedin} from '../../../assets/img/svg/linkedin.svg'
import {ReactComponent as IconTwitter} from '../../../assets/img/svg/twitter.svg'

import './SocialLinks.scss';


export default function SocialLinks() {
    return (

          <div className="social-links">
            <a href="https://www.facebook.com/Engelcituk7"
                className="facebook"
                target="_blank"
                rel='noreferrer noopener'
            >
                <IconFacebook/>
            </a>
            <a href="https://twitter.com/engelnov"
                className="twitter"
                target="_blank"
                rel='noreferrer noopener'
            >
                <IconTwitter/>
            </a>
            <a href="https://www.linkedin.com/in/cituk-caamal-13000473/"
                className="linkedin"
                target="_blank"
                rel='noreferrer noopener'
            >
                <IconLinkedin/>
            </a>
            <a href="https://github.com/engelcituk"
                className="github"
                target="_blank"
                rel='noreferrer noopener'
            >
                <IconGithub/>
            </a>
          </div>
      
    )
} 