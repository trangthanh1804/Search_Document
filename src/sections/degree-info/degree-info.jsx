import React from "react";
import "./degree-info.scss";
function DegreeInfo() {
  return (
    <div>
      <section className="degree-info-columns columns">
        <div className="container ">
          <ul className="column-list ">
            <li>
              <div>
                <h6>Estimated Time</h6>
                <h5>4 Months</h5>
                <p className="x-small">At 10 hrs/week</p>
              </div>
            </li>
            <li>
              <div>
                <h6>Enroll by</h6>
                <h5>November 11, 2020</h5>
                <p className="x-small">
                  Get access to classroom immediately on enrollment
                </p>
              </div>
            </li>
            <li>
              <div>
                <h6>Prerequisites</h6>
                <h5>Python &amp; SQL</h5>
                <p className="x-small">
                  <a>See prerequisites in detail</a>
                </p>
                <div className="simple-modal" />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
export default DegreeInfo;
