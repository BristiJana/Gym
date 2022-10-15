import React, { useState } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ModalHover } from "react-modal-hover";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { Opacity } from "@material-ui/icons";
import { hover } from "@testing-library/user-event/dist/hover";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.grey[50],
    border: `1px solid ${theme.palette.info.main}`,
    color: theme.palette.info.main,
  },
}));
function Contact(props) {
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);

  return (
    <div className="contdiv">
      <div className="wrappcon">
        <nav id="sidebarcon">
          <div class="sidebarcon-header">
            <img
              src="https://as1.ftcdn.net/v2/jpg/02/37/07/74/1000_F_237077416_3eF5ooxZt69CRL06TOiYvq1KDHlywvMp.jpg"
              width="80"
              height="80"
              className="exheadcont"
            />
          </div>
          <div class="row ctr" style={{ marginTop: "20px" }}>
            <div class="col-sm-4" style={{ width: "84px" }}>
              <Avatar className="sm1">
                <InstagramIcon
                  className="smp1"
                  style={{ color: "#fb2576" }}
                  onMouseEnter={() => setIsShown1(true)}
                  onMouseLeave={() => setIsShown1(false)}
                />
              </Avatar>
              {isShown1 && (
                <div
                  style={{
                    backgroundColor: "#fb2576",
                    width: "80px",
                    borderRadius: "4%",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Instagram
                </div>
              )}
            </div>
            <div class="col-sm-4" style={{ width: "84px" }}>
              <Avatar className="sm2">
                <FacebookIcon
                  className="smp1"
                  style={{ color: "#083AA9" }}
                  onMouseEnter={() => setIsShown2(true)}
                  onMouseLeave={() => setIsShown2(false)}
                />
              </Avatar>
              {isShown2 && (
                <div
                  style={{
                    backgroundColor: "#083AA9",
                    width: "80px",
                    borderRadius: "4%",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Facebook
                </div>
              )}
            </div>
            <div class="col-sm-4">
              <Avatar className="sm3">
                <LinkedInIcon
                  className="smp1"
                  style={{ color: "#2192FF" }}
                  onMouseEnter={() => setIsShown3(true)}
                  onMouseLeave={() => setIsShown3(false)}
                />
              </Avatar>
              {isShown3 && (
                <div
                  style={{
                    backgroundColor: "#2192FF",
                    width: "80px",
                    borderRadius: "4%",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  LinkedIn
                </div>
              )}
            </div>
          </div>
        </nav>
        <div id="conticon">
          <div class="row">
            <div class="col-sm-3" style={{ width: "280px" }}>
              <h5 className="conth">Quick Links</h5>
              <ul className="contu">
                <li className="conta">
                  <a className="contli">About</a>
                </li>
                <li className="conta">
                  <a className="contli">FAQs</a>
                </li>
                <li className="conta">
                  <a className="contli">Privacy Policy</a>
                </li>
                <li className="conta">
                  <a className="contli">WTF in News</a>
                </li>
                <li className="conta">
                  <a className="contli">Terms & Conditions</a>
                </li>
                <li className="conta">
                  <a className="contli">Refund & Cancellation</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-4">
              <h5 className="conth">Explore</h5>
              <ul className="contu">
                <li className="conta">
                  <a className="contli">Arenas</a>
                </li>
                <li className="conta">
                  <a className="contli">Studios</a>
                </li>
                <li className="conta">
                  <a className="contli">Nutrition</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-4">
              <h5 className="conth">Contact</h5>
              <ul className="contu">
                <li className="conta">
                  <FmdGoodIcon
                    style={{
                      color: "white",
                      position: "absolute",
                      right: "430px",
                      marginTop: "5px",
                    }}
                  />
                  <a className="contli">
                    Ro : S1502,Amrapali Silicon city,Sector 76,Noida,Uttar
                    Pradesh,India
                  </a>
                </li>
                <li className="conta">
                  <FmdGoodIcon
                    style={{
                      color: "white",
                      position: "absolute",
                      right: "430px",
                      marginTop: "5px",
                    }}
                  />
                  <a className="contli">
                    Ho:C-86 B,Ground Floor,Sector 8,Noida,Uttar Pradesh,India
                  </a>
                </li>
                <li className="conta">
                  <CallIcon
                    style={{
                      color: "white",
                      position: "absolute",
                      right: "430px",
                      marginTop: "5px",
                    }}
                  />
                  <a className="contli">+919090639005</a>
                </li>
                <li className="conta">
                  <EmailIcon
                    style={{
                      color: "white",
                      position: "absolute",
                      right: "430px",
                      marginTop: "3px",
                    }}
                  />
                  <a className="contli">support@wtfup.me</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
