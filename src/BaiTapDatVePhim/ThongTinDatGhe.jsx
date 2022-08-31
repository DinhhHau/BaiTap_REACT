import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../redux/actions/BaiTapDatVeActions";

class ThongTinDatGhe extends Component {
  render() {
    // console.log(this.props.danhSachGheDangDat)
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>
          <span
            className="text-light"
            style={{ fontSize: "30px", marginLeft: "10px" }}
          >
            Ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon"></button>
          <span
            className="text-light"
            style={{ fontSize: "30px", marginLeft: "10px" }}
          >
            Ghế đang đặt
          </span>
          <br />
          <button className="ghe" style={{ marginLeft: 0 }}></button>
          <span
            className="text-light"
            style={{ fontSize: "30px", marginLeft: "10px" }}
          >
            Ghế chưa đặt
          </span>
        </div>
        <div className="mt-5">
          <table className="table table_bookingticket">
            <thead>
              <tr className="text-light" style={{ fontSize: 25 }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString()}</td>
                    <td>
                      <button
                        style={{
                          backgroundColor: "initial",
                          width: "100%",
                          fontSize: 20,
                        }}
                        className="text-white"
                        onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                        }}
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="text-danger">
              <tr>
                <td></td>
                <td>Tổng Tiền</td>
                <td>{this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat,index)=>{
                  return tongTien += gheDangDat.gia
                },0).toLocaleString()}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
});

export default connect(mapStateToProps)(ThongTinDatGhe);
