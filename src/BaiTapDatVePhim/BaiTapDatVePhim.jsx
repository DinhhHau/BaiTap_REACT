import React, { Component } from "react";
import "../assets/styles/bookingticket.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGhe from "../Data/danhSachGhe.json";
import HangGhe from "./HangGhe";

export default class BaiTapDatVePhim extends Component {
  renderHangGhe = () => {
    return danhSachGhe.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "absolute",
          width: "100%",
          backgroundImage: "url('./img/bookingTicket/bgmovie.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div
                  className="text-warning display-4 mt-1"
                  style={{ fontSize: "52px" }}
                >
                  ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                </div>
                <div className="mt-4 text-light" style={{ fontSize: "25px",marginRight:70 }}>
                  Màn hình
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <div className="screen"></div>
                  {this.renderHangGhe()}
                </div>
                
              </div>
              <div className="col-4 ">
                <div className="text-light mt-3" style={{ fontSize: "35px" }}>
                  DANH SÁCH GHẾ BẠN CHỌN
                </div>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
