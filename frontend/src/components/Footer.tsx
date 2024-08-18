import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Abstract</h3>
            <ul>
              <li>Branches</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Release Notes</li>
              <li>Status</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Community</h3>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Dribbble</li>
              <li>Podcast</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Legal</li>
            </ul>
            <h4 className="font-bold mt-4 mb-2">Contact Us</h4>
            <p>info@abstract.com</p>
          </div>
          <div>
            <p className="text-sm">
              © Copyright 2022<br />
              Abstract Studio Design, Inc.<br />
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;