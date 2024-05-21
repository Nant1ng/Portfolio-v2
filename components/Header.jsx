import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Header = ({ socials }) => {
  return (
    <header id="header">
        <nav aria-label="Social media links">
          {socials.map((social, idx) => (
            <SocialIcon
              key={idx}
              url={social.link}
              fgColor="currentColor"
              bgColor="transparent"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to ${social.network}`}
            />
          ))}
        </nav>
        <nav aria-label="Contact link" className="hover">
          <SocialIcon
            url="#contact"
            network="email"
            fgColor="currentColor"
            bgColor="transparent"
            className="social-icon"
            aria-label="Go to contact section"
          />
          <Link href="#contact" aria-label="Get in touch">
            <p className="contact-btn">Get In Touch</p>
          </Link>
        </nav>
    </header>
  );
};

export default Header;
