import React from 'react';

const SocialIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="glass-card w-10 h-10 rounded-md flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer">
    {children}
  </div>
);

const Footer = () => {
  return (
    <footer className="section-bg-gradient py-8 mt-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        {/* Logo Placeholder */}
        <div className="w-16 h-16 glass-card rounded-lg"></div>

        {/* Copyright */}
        <p className="text-base md:text-lg text-white/80 text-center md:text-left font-medium">
          Copyright © 2025 BRIX Agency All Rights Reserved
        </p>

        {/* Social Icons */}
        <div className="flex items-center space-x-3">
          <SocialIcon>
            <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" />
            </svg>
          </SocialIcon>
          <SocialIcon>
            <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3.06A12.92 12.92 0 013 2.5a4.48 4.48 0 001.38 5.98A4.49 4.49 0 013.2 8.1v.06a4.48 4.48 0 003.59 4.4A4.49 4.49 0 014.8 13a4.48 4.48 0 004.19 3.12 9 9 0 01-5.57 1.92A9.28 9.28 0 011 18a12.91 12.91 0 007 2.94c8.42 0 13.02-6.98 13.02-13.02v-.59A9.43 9.43 0 0023 3z" />
            </svg>
          </SocialIcon>
          <SocialIcon>
            <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.646c-3.141 0-3.492.012-4.702.068-2.673.123-3.952 1.4-4.075 4.075-.056 1.21-.067 1.561-.067 4.702s.011 3.492.067 4.702c.123 2.673 1.402 3.952 4.075 4.075 1.21.056 1.561.067 4.702.067s3.492-.011 4.702-.067c2.673-.123 3.952-1.402 4.075-4.075.056-1.21.067-1.561.067-4.702s-.011-3.492-.067-4.702c-.123-2.673-1.402-3.952-4.075-4.075-1.21-.056-1.561-.068-4.702-.068zm0 3.247a5.137 5.137 0 100 10.274 5.137 5.137 0 000-10.274zm0 8.627a3.49 3.49 0 110-6.98 3.49 3.49 0 010 6.98zm4.883-7.927a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" />
            </svg>
          </SocialIcon>
          <SocialIcon>
            <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </SocialIcon>
          <SocialIcon>
            <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
              <path d="M21.582,6.186c-0.23-0.854-0.906-1.531-1.76-1.76C18.25,4,12,4,12,4S5.75,4,4.178,4.426 c-0.854,0.229-1.531,0.906-1.76,1.76C2,7.758,2,12,2,12s0,4.242,0.418,5.814c0.229,0.854,0.906,1.531,1.76,1.76 C5.75,20,12,20,12,20s6.25,0,7.822-0.426c0.854-0.229,1.531-0.906,1.76-1.76C22,16.242,22,12,22,12S22,7.758,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" />
            </svg>
          </SocialIcon>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 