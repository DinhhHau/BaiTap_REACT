import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="container d-flex justify-content-center">
        <div
          className="card text-white bg-dark"
          style={{ width: "300px", height: "400px", marginTop: "100px" }}
        >
          <div className="card-img mt-4" style={{ textAlign: "center" }}>
            <img
              className="card-img-top border border-danger"
              src="./img/img/avatar.jpg"
              alt="Title"
              style={{
                width: "140px",
                height: "130px",
                border: "5px solid",
                borderRadius: "50%",
              }}
            />
          </div>
          <div className="card-body text-center">
            <h3 className="mt-4 my-0">Nguyễn Đình Hậu</h3>
            <p className="mt-2 my-0 text-danger">CYBERSOFT_BC30</p>
            <div className="social mt-4">
              <a href="#" style={{ margin: "25px 20px" }}>
                <i className="text-white fab fa-facebook" />
              </a>
              <a href="#" style={{ margin: "25px 20px" }}>
                <i className="text-white fab fa-youtube" />
              </a>
              <a href="#" style={{ margin: "25px 20px" }}>
                <i className="text-white fab fa-twitter" />
              </a>
              <a href="#" style={{ margin: "25px 20px" }}>
                <i className="text-white fab fa-github" />
              </a>
            </div>
            <button className="buttonContact btn btn-dark border border-danger mt-4">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    );
  }
}
