import React from "react";
import "./Experience.css";
import { Link } from "react-router-dom";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import GroupIcon from "@mui/icons-material/Group";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import CleanHandsIcon from "@mui/icons-material/CleanHands";
function Experience(props) {
  return (
    <div className="expdiv">
      <div className="wrappep">
        <nav id="sidebarep">
          <div class="sidebarep-header">
            <h1 style={{ color: "white" }} className="exhead">
              WTF Fitness Experience?
            </h1>
          </div>
          <h2 style={{ color: "white" }} className="expara">
            @ your regular gym cost?{" "}
          </h2>
        </nav>
        <div id="contiep">
          <div class="row smrow">
            <div class="col-sm-3">
              <div class="card smcard">
                <div class="card-body">
                  <h5 class="card-title sph">
                    <AcUnitIcon style={{ fontSize: "60px" }} />
                  </h5>
                  <p class="card-text sp">Modern Equipments</p>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card smcard">
                <div class="card-body">
                  <h5 class="card-title sph">
                    <GroupIcon style={{ fontSize: "60px" }} />
                  </h5>
                  <p
                    class="card-text sp"
                    style={{ width: "80%", paddingLeft: "30px" }}
                  >
                    Skilled Trainer
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card smcard">
                <div class="card-body">
                  <h5 class="card-title sph">
                    <FilePresentIcon style={{ fontSize: "60px" }} />
                  </h5>
                  <p class="card-text sp">Top Class Ambiamce</p>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card smcard">
                <div class="card-body">
                  <h5 class="card-title sph">
                    <CleanHandsIcon style={{ fontSize: "60px" }} />
                  </h5>
                  <p
                    class="card-text sp"
                    style={{ width: "80%", paddingLeft: "30px" }}
                  >
                    Sanitized GYMS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Experience;
