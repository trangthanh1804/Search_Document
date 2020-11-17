import React from "react";
import logo1 from "assets/images/LOGO1.png";
import "./footer.styles.scss";
function footercomponent() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img src={logo1} />
        <div className="footer__item-2">
          <h3>Liên Hệ</h3>
          <nav className="nav_item">
            <i className="fa fa-map-marker" />
            <p>236B Lê Văn Sỹ, Phường 1, Quận Tân Bình, TP. Hồ Chí Minh</p>
          </nav>
          <nav className="nav_item">
            <i className="fa fa-envelope" />
            <p> hcmunre.edu@gmail.com </p>
          </nav>
          <nav className="nav_item">
            <i className="fa fa-phone" />
            <p> 08.38443006 </p>
          </nav>
        </div>
      </div>
    </footer>
  );
}
export default footercomponent;
