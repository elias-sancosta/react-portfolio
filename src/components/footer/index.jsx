import React from 'react';
import logo1 from '../../assets/f_logo.png';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="conatiner text-center top">
          <div className="img">
            <img src={logo1} alt="" />
          </div>
          <p>© 2021. All rights reserved by GorkCoder-Themes.</p>
        </div>
      </footer>
    </>
  );
}
