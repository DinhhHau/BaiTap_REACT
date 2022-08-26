import React, { Component } from "react";

import dataGlasses from "../Data/dataGlasses.json";

// const data = [
//     id: 1,
//     price: 30,
//     name: "GUCCI G8850U",
//     url: "./glassesImage/v1.png",
//     desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
//   },
//   {
//     id: 2,
//     price: 50,
//     name: "GUCCI G8759H",
//     url: "./glassesImage/v2.png",
//     desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
//   },
//   {
//     id: 3,
//     price: 30,
//     name: "DIOR D6700HQ",
//     url: "./glassesImage/v3.png",
//     desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
//   },
//   {
//     id: 4,
//     price: 70,
//     name: "DIOR D6005U",
//     url: "./glassesImage/v4.png",
//     desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
//   },
//   {
//     id: 5,
//     price: 40,
//     name: "PRADA P8750",
//     url: "./glassesImage/v5.png",
//     desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
//   },
//   {
//     id: 6,
//     price: 60,
//     name: "PRADA P9700",
//     url: "./glassesImage/v6.png",
//     desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
//   },
//   {
//     id: 7,
//     price: 80,
//     name: "FENDI F8750",
//     url: "./glassesImage/v7.png",
//     desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
//   },
//   {
//     id: 8,
//     price: 100,
//     name: "FENDI F8500",
//     url: "./glassesImage/v8.png",
//     desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
//   },
//   {
//     id: 9,
//     price: 60,
//     name: "FENDI F4300",
//     url: "./glassesImage/v9.png",
//     desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
//   },
// ];

export default class BaiTapThuKinh extends Component {
  renderGlassesList = () => {
    return dataGlasses.map((glassesItem, index) => {
      return (
        <img
          onClick={() => {
            this.onchangeGlasses(glassesItem);
          }}
          key={index}
          src={glassesItem.url}
          alt="item"
          className="border border-width-1 p-2 ml-4"
          style={{ marginRight: 25, cursor: "pointer" }}
          width={100}
          height={60}
        />
      );
    });
  };

  onchangeGlasses = (newGlasses) => {
    // chạy hàm setstate biến newGlasses mới để hứng giá trị mới của ' GLASSES (có giá trị cũ state) '
    this.setState({
      GLASSES: newGlasses, // biến đổi giá trị cũ của GLASSES thành newGlasses
    });
  };

  state = {
    GLASSES: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "img/glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  render() {
    // tạo animate 
    // ${Date.now} animate chạy trong thời gian hiện tại 
    const keyFrames = ` @keyframes animateGlasses${Date.now()} { 
        from {
            width: 0;
            transform: rotate(45deg);
            opacity: "0",
        }
        to {
            width: 100px;
            transform: rotate(0deg);
            opacity: "0.7",
        }
    }`;

    const InfoModelLeft = {
      width: "250px",
      left: "350px",
    };
    const InfoModelRight = {
      width: "250px",
      right: "350px",
    };
    const styleGlasses = {
      width: "130px",
      opacity: "0.7",
      top: "80px",
      left: "410px",
      animation: `animateGlasses${Date.now()} 1s`, // set giao diện "" mặc định đang tĩnh thành cho animate chạy giao diện trong `...` (giao diện động) 
    };
    const infoGlasses = {
      top: "200px",
      left: "350px",
      width: "250px",
      height: "105px",
      textAlign: "left",
      paddingLeft: 5,
      backgroundColor: "rgba(255,127,0,.5)",
    };

    return (
      
      <div
        style={{
          backgroundImage: "url(./img/glassesImage/background2.jpg)",
          backgroundSize: "2000px",
          backgroundPosition: "top center",
          minHeight: "2000px",
        }}
      >
        {/* vừa chạy giao diện vừa chạy "styleGlasses" vừa chạy animate  */}
        <style> 
            {keyFrames}
        </style>
        {/*  */}
        <div style={{ backgroundColor: "rgba(0,0,0,.4)", minHeight: "2000px" }}>
          <h1
            className="text-center text-light p-2 "
            style={{ backgroundColor: "rgba(0,0,0,.8)" }}
          >
            TRY GLASSES APP ONLINE
          </h1>
          <div className="container">
            <div
              style={{ padding: "100" }}
              className="row text-center mt-5 d-flex justify-content-center"
            >
              <div className="position-relative">
                <div className="col-6">
                  <img
                    style={InfoModelLeft}
                    className="position-absolute"
                    src="./img/glassesImage/model.jpg"
                    alt="model1.jpg"
                  />
                  <img
                    style={styleGlasses}
                    className="position-absolute"
                    src={this.state.GLASSES.url}
                    alt=""
                  />
                  <div style={infoGlasses} className="info position-absolute">
                    <p style={{ color: "#AB82FF", fontSize: 16, margin: 0 }}>
                      {this.state.GLASSES.name}
                    </p>
                    <span style={{ fontSize: 14 }}>
                      {this.state.GLASSES.desc}
                    </span>
                  </div>
                </div>
                <div className="col-6">
                  <img
                    style={InfoModelRight}
                    className="position-absolute"
                    src="./img/glassesImage/model.jpg"
                    alt="model1.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* dùng ham map để render ra kính */}
          <div
            style={{
              position: "absolute",
              top: 465,
              left: "63px",
              opacity: 0.9,
            }}
            className="bg-light container text-center mt-5 d-flex justify-content-center p-5"
          >
            {this.renderGlassesList()}
          </div>
        </div>
      </div>
    );
  }
}
