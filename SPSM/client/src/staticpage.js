import React from "react";
import AppNavbar from "./components/AppNavbar";
import Contact from "./Contact";
import { getfeature } from './actions/featuresActions'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./card.css";

class Static extends React.Component {

  componentDidMount() {
    this.props.getfeature()
  }
  render() {
    return (
      <div>
        <AppNavbar />

        <div className="bgimg-1" style={{ marginTop: "-45px" }}>
          <div className="caption " style={{ transform: "rotate(0deg)" }}>
            <p className="tit p-2">
              School management system is essential for all types of school
              (state, ICSE, CBSE, IB). This software helps to automate and
              manage entire school activities such as admission, fees
              collection, examination, student administration, library
              management, hostel management, store management, vehicle
              management, etc
            </p>
          </div>
        </div>

        <div
          style={{
            color: "#777",
            backgroundColor: "rgb(40, 46, 52)",
            textAlign: "center justify",
            padding: "50px 80px",
            transform: "rotate(0deg)"
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontSize: "50px",
              marginBottom: "2rem",
              color: "#dc006c",
              fontWeight: "bold",
              fontFamily: "Archivo Narrow, sans-serif"
            }}
          >
            Features
          </h1>
          <p className="tit2">
            School management system software comes with an incredible set of
            customizable features to assist with your school administration
            tasks and complex processes.
          </p>
          <div className="d-flex mt-5 flex-wrap">
            {this.props.isloading ? <div class="lds-hourglass"></div> : this.props.feature.map((el, i) => (
              <div className="blocfeature" key={i}>
                <img src={el.img} alt="feature" /> <h5>{el.title}</h5>{" "}
                <p className="blocfeaturep">{el.ctn}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bgimg-2">
          <div className="caption">
            <span
              className="border"
              style={{
                backgroundColor: "transparent",
                fontSize: "25px",
                color: "#f7f7f7"
              }}
            />
          </div>
        </div>

        <div
          style={{
            color: "#ddd",
            backgroundColor: "#282E34",
            textAlign: "center justify",
            padding: "50px 80px"
          }}
        >
          <h1 className="Contacttitle">Donnation form</h1>
        </div>

        <div className="bgimg-3">
          <span className="border" />
          <section
            className="cardbody credit-card visa gr-visa"
            style={{ marginTop: "100px" }}
          >
            <div className="logo">Visa</div>
            <form>
              <h2>Payment Details</h2>

              <ul className="inputs">
                <li>
                  <label>Card Number</label>
                  <input
                    type="text"
                    name="card_number"
                    pattern="[0-9]{13,16}"
                    value="9842 9472 9457 9472"
                    className="cardinput full gr-input"
                    required
                    readOnly
                  />
                </li>
                <li className="expire last">
                  <label>Expiration</label>
                  <input
                    type="text"
                    name="expire_month"
                    value="December (12)"
                    size="10"
                    className="cardinput month gr-input"
                    required
                    readOnly
                  />
                  <input
                    type="text"
                    name="expire_year"
                    value="2014"
                    size="10"
                    className="cardinput year gr-input"
                    required
                    readOnly
                  />
                  <div className="clearfix" />
                </li>
                <li className="cvc-code last">
                  <label>CVC Code</label>
                  <input
                    type="text"
                    name="cvc_code"
                    value="174"
                    size="10"
                    className="cardinput gr-input"
                    required
                    readOnly
                  />
                </li>
                <div className="clearfix" />
              </ul>
            </form>
            <div className="watermark">Visa</div>
          </section>
          <span className="border" />
        </div>

        <div style={{ position: "relative" }}>
          <div
            style={{
              color: "#ddd",
              backgroundColor: "#282E34",
              textAlign: "center justify",
              padding: "50px 80px"
            }}
          >
            <h1 className="Contacttitle">Contact</h1>
          </div>
        </div>

        <div className="bgimg-4">
          <span className="border" />
          <Contact />
        </div>

        <footer>
          <div className="footer">
            <div className="logo">
              <span className="word1">Private</span>
              <span className="word2">School</span>
              <span className="word1 word11">System</span>
              <span className="word2">Management</span>
            </div>
            <div style={{ fontSize: "30px" }}>
              <i
                className="fab fa-instagram mx-3 hover"
                style={{ color: "#007bff" }}
              />
              <i
                className="fab fa-google-plus-g mx-3 hover"
                style={{ color: "#007bff" }}
              />
              <i
                className="fab fa-twitter mx-3 hover"
                style={{ color: "#007bff" }}
              />
              <i
                className="fab fa-facebook-f mx-3 hover"
                style={{ color: "#007bff" }}
              />
              <i
                className="fab fa-youtube mx-3 hover"
                style={{ color: "#007bff" }}
              />
            </div>
            <p>Copyright &copy; 2019 All Rights Reserved.</p>
          </div>

          <Link to="/cv" target="_blanc">
            <button className="button mt-5">
              {/* <i className="material-icons fab fa-node-js"></i> */}
            </button>
          </Link>
        </footer>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth,
    feature: state.feature.feature,
    featureLoading: state.feature.isloading
  }
};
export default connect(
  mapStateToProps,
  { getfeature }
)(Static);
