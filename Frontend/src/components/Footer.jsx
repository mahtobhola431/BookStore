import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";


const Footer = () => {
  return (
    <div>
<footer className="footer p-10 bg-neutral text-neutral-content mt-3">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>


  <nav>
    <h6 className="footer-title flex  justify-center items-center">Connect to us</h6> 
    <a className="link link-hover"> Twitter<FaTwitter /></a>
    <a className="link link-hover"> Facebook<FaFacebook /></a>
    <a className="link link-hover"> LinkedIn<FaLinkedinIn />
</a>
  </nav>
</footer>


    </div>
  )
}

export default Footer