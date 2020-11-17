import React from "react";
import "./benefit-cards.component.scss";

function BenefitCardsComponent() {
  return (
    <div className=" benefit-cards container">
      <h2 className="mt-5">Don't waste your valuable time or money</h2>
      <span>
        Only Udacity has all the critical factors to deliver real results
      </span>

      <div className="row benefit-cards-content mt-5">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card benefit-cards-1">
            <img
              src="//www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/6pk4riNMII7w6COla8glF4/8c8655c3e7f185537eec5ee9ed118e83/EmployeableSkills__1_.svg"
              className="img_position"
              alt="briefcase icon"
            />
            <div className="card-body">
              <h4 className="card-title">Get real employable skills</h4>
              <p className="card-text">
                Our quality curriculum is designed with top-tier industry
                partners, not academics, so you learn the high-impact skills
                that top companies want.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card benefit-cards-2">
            <img
              src="//www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/6oOXJEvILWWE2x4mUiRnwH/fc4d17a755c4e78b11bb24775458fcc2/ActiveLearning__1_.svg"
              className="img_position"
              alt="bulb"
            />
            <div className="card-body">
              <h4 className="card-title ">Project-based, active learning</h4>
              <p className="card-text ">
                Learn by doing with real-world projects and other hands-on
                exercises that lead to real skills mastery.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card benefit-cards-3">
            <img
              src="//www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/1lUt0ObnFgoXsVtDTRaiIB/ba0d0f3d6e84f6f0740234ccb474ed28/Schedule__1_.svg"
              className="img_position"
              alt="clock icon"
            />
            <div className="card-body">
              <h4 className="card-title">Learn on your schedule</h4>
              <p className="card-text">
                Self-paced learning - whenever and wherever you want. Graduate
                while learning part-time for 10 hrs/week.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className=" card benefit-cards-4">
            <img
              src="//www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/7mYegAlCmb6Zmh4fvWlAxK/e036c865aff3c5b1f9f816d08ab2a545/HelpYouNeed__1_.svg"
              className="img_position"
              alt="icon"
            />
            <div className="card-body">
              <h4 className="card-title">
                The help you need, when you need it
              </h4>
              <p className="card-text">
                Reach out to our mentors 24/7 and have your coding questions
                answered quickly so you can keep learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BenefitCardsComponent;
