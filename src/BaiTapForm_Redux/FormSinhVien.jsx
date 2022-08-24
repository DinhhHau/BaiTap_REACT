import React, { Component } from "react";
import { connect } from "react-redux";

export class FormSinhVien extends Component {
  handelSubmit = (e) => {
    e.preventDefault();
    const action = {
      type: "HANDLE_SUBMIT",
      sinhVien: { ...this.props.QuanLySinhVienReducer.sinhVien },
    };
    this.props.dispatch(action);
  };

  render() {
    let { sinhVien } = this.props.QuanLySinhVienReducer;
    console.log(sinhVien);

    return (
      <div className="container">
        <div className="card text-left rounded-0">
          <div className="card-header bg-dark text-white">
            <h3>Thông tin sinh viên</h3>
          </div>
          <div className="card-body">
            <form className="form" onSubmit={this.handelSubmit}>
              <div className="row">
                <div className="form-group col-6 mt-3">
                  <span>Mã SV</span>
                  <input
                    className="form-control"
                    id="maSV"
                    value={sinhVien.maSV}
                    onChange={(e) => {
                      const action = {
                        type: "HANDEL_CHANGE_INPUT",
                        id: e.target.id,
                        value: e.target.value,
                      };
                      console.log(action);
                      this.props.dispatch(action);
                    }}
                  />
                </div>
                <div className="form-group col-6 mt-3">
                  <span>Họ Tên</span>
                  <input
                    className="form-control"
                    id="hoTen"
                    value={sinhVien.hoTen}
                    onChange={(e) => {
                      const action = {
                        type: "HANDEL_CHANGE_INPUT",
                        id: e.target.id,
                        value: e.target.value,
                      };
                      console.log(action);
                      this.props.dispatch(action);
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-6 mt-3">
                  <span>Số điện thoại</span>
                  <input
                    className="form-control"
                    id="soDienThoai"
                    value={sinhVien.soDienThoai}
                    onChange={(e) => {
                      const action = {
                        type: "HANDEL_CHANGE_INPUT",
                        id: e.target.id,
                        value: e.target.value,
                      };
                      console.log(action);
                      this.props.dispatch(action);
                    }}
                  />
                </div>
                <div className="form-group col-6 mt-3">
                  <span>Email</span>
                  <input
                    className="form-control"
                    id="email"
                    value={sinhVien.email}
                    onChange={(e) => {
                      const action = {
                        type: "HANDEL_CHANGE_INPUT",
                        id: e.target.id,
                        value: e.target.value,
                      };
                      console.log(action);
                      this.props.dispatch(action);
                    }}
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12 text-left">
                  <button type="submit" className="btn btn-success">
                    Thêm sinh viên
                  </button>
                  <button
                    className="btn btn-primary mx-2"
                    type="button"
                    onClick={() => {
                      const action = {
                        type: "CAP_NHAT_SV",
                        payload: {
                          SVUpdate: sinhVien.maSV,
                        },
                      };
                      this.props.dispatch(action);
                    }}
                  >
                    Cập nhật
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  QuanLySinhVienReducer: state.QuanLySinhVienReducer,
});

export default connect(mapStateToProps)(FormSinhVien);
