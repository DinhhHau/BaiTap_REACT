import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../redux/actions/BaiTapDatVeActions";
import { DAT_GHE } from "../redux/types/BaiTapDatVeType";

export class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;
      // trạng thái ghế đã được người khác đăt
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }
      // xét trạng thái ghế đang đặt
      let cssGheDangDat = "";
      let indexGheDangDat =
        this.props.BaiTapDatVeReducer.danhSachGheDangDat.findIndex(
          (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
        );
      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }
      return (
        <button
          disabled={disabled}
          onClick={() => {
            // const action = {
            //   type: DAT_GHE,
            //   payload: {
            //     ghe: ghe,
            //   },
            // }
            this.props.dispatch(datGheAction(ghe))
          }}
          className={`${cssGheDaDat} ${cssGheDangDat} ghe`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return (
        <button className="rowNumber" key={index}>
          {" "}
          {hang.soGhe}{" "}
        </button>
      );
    });
  };

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div style={{ marginLeft: 30 }}>
          {this.props.hangGhe.hang} {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang} {this.renderGhe()}
        </div>
      );
    }
  };
  render() {
    // console.log(this.props.danhSachGheDangDat);
    return (
      <div
        className="text-light ml-3 mt-3"
        style={{ textAlign: "left", fontSize: "30px" }}
      >
        {this.renderHangGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  //   danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,   => this.props.danhSachGheDangDat (dong17)
  BaiTapDatVeReducer: state.BaiTapDatVeReducer,
});

export default connect(mapStateToProps)(HangGhe);
