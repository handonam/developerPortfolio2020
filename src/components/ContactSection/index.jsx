import React from 'react';
import {
  Contact,
  ContactCenterContainer,
  ContactHeading,
  ContactSelfieContainer,
  ContactSelfie,
} from './index.styled.js';

const ContactSection = () => {
  return (
    <Contact>
      <ContactCenterContainer>
        <ContactHeading>
          <h1>
            <a class="u-White" href="mailto:hello@dont-spam-me.com"
              onmouseover="this.href=this.href.replace(/(dont-spam-me)/g,'hanamdo');">
              Contact me!
            </a>
          </h1>
          <h6>Curious how this site was built? <br /> Look at the <a href="https://github.com/handonam/developerPortfolio2020">sourcecode</a>!</h6>
        </ContactHeading>
        <ContactSelfieContainer>
          <ContactSelfie src="/images/components/contact/selfie.jpg" />
        </ContactSelfieContainer>
      </ContactCenterContainer>
    </Contact>
  )
};

export default ContactSection;
