import React from "react";
import "./student-story.component.scss";
function studentstorycomponent() {
  return (
    <div className="story ">
      <div className="container">
        <h2>Strength in numbers</h2>
        <ul className="row ">
          <li className="col-lg-4 col-sm-12">
            <img
              src="//www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/1I5Q4ulQdaV2Cd2RxJG1NF/9012118676e481a058bbbc1951c953c1/degree-hat.svg"
              className="feature-img"
              alt="Udacity graduations and counting"
            />
            <h3>100,000+</h3>
            <p>Udacity graduations and counting</p>
          </li>
          <li className="col-lg-4 col-sm-12">
            <img
              src="//www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/58pro2AvCh9F0M3GQQ2cGB/683daf82b944e4c342f3e4f3eca22e3b/star_copy.svg"
              className="feature-img"
              alt="Industry experts partnering to build our content"
            />
            <h3>200+</h3>
            <p>Industry experts partnering to build our content</p>
          </li>
          <li className="col-lg-4 col-sm-12">
            <img
              src="//www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/8E5HTugHBjVRYb0NxgSYB/54acb70c22932686ba6b2509b401c91d/star_copy_2.svg"
              className="feature-img"
              alt="Enterprise customers world-wide"
            />
            <h3>100+</h3>
            <p>Enterprise customers world-wide</p>
          </li>
        </ul>
        <div className="row story-student-content justify-content-between ">
          <div className="col-lg-4 col-md-12">
            <div className="story-student story-student-card-1   ">
              <div>
                <img
                  src="//www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/2hJTmqhPe2T5zPCSVC3waq/533fc738cb83f2baf5aa75ca3ae77161/Jesse.png"
                  alt="Jesse"
                />
              </div>

              <h4 className="card-title">Jesse</h4>
              <p className="card-text">
                "The curriculum was directly targeted toward applied techniques
                with high profile projects – real datasets with industry
                partners. It helped me achieve my career transition goal."
              </p>
              <div className="card__company-info">
                <p className="card__now uppercase x-small mb-0">NOW AT</p>
                <p className="card__company slate">Raytheon | Data Scientist</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="story-student story-student-card-2  ">
              <div>
                <img
                  src="//www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/4nmjsKImQCCTpeoHhMMz1W/548748ac6a642329aadde86996d23fcf/Sundar.png"
                  alt="Sundar"
                />
              </div>

              <h4 className="card-title">Sundar</h4>
              <p className="card-text">
                "The curriculum was aligned with what I wanted to study. The
                assignments are specific to the industry I’m in. I was able to
                develop new language translation tools for my company."
              </p>
              <div className="card__company-info">
                <p className="card__now uppercase x-small mb-0">NOW AT</p>
                <p className="card__company slate">
                  Comcast | Lead Data Scientist
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="story-student story-student-card-3  ">
              <div>
                <img
                  src="//www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/3GBOJxWBUVtGuEDc1Oxsxj/8742cdc8459747649df0184f2674673b/David.png"
                  alt="David"
                />
              </div>

              <h4 className="card-title">David</h4>
              <p className="card-text">
                "One of the things that attracted me to Udacity was a curriculum
                developed by people that worked for some of the biggest and most
                successful tech companies.”
              </p>
              <div className="card__company-info">
                <p className="card__now uppercase x-small mb-0">NOW AT</p>
                <p className="card__company slate">
                  Panera Bread | Data Administrator
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default studentstorycomponent;
