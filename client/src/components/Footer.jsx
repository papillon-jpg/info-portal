import React from "react";
import Logo from "../img/logo1.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        © 2026 Sajra Alijagić 2022 - 2026
        Sva prava zadržana.
        Zabranjeno preuzimanje sadržaja bez dozvole izdavača.
      </span>
    </footer>
  );
};

export default Footer;