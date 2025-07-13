import React from 'react';

const Header = () => {
  return (
    <header className="clinic-header">
      <div className="header-top">
        <div className="clinic-name">
          <h1>Dr.SENAIT<br />DENTAL CLINIC</h1>
        </div>
        
        <nav className="main-nav">
          {['Home', 'About Us', 'Services', 'Pages', 'Contact Us'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`}>
              {item}
            </a>
          ))}
        </nav>
        
        <div className="header-phone">
          +251 941 83 83 83
        </div>
      </div>
    </header>
  );
};

export default Header;