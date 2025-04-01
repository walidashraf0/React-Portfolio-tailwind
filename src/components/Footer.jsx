import React from "react";

const Footer = () => {
  return (
    <footer className="pt-32 pb-6 text-center">
      <div className="container">
        <p>
          CopyRight &copy; Walid Ashraf {new Date().getFullYear()}, All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
