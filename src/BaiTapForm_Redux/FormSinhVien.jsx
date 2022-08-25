import React, { Component } from "react";
import { connect } from "react-redux";

export class FormSinhVien extends Component {
  state = {
    errors: {
      maSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
  };

  render() {
    let { sinhVien, arrsinhVien } = this.props.QuanLySinhVienReducer;
    console.log(sinhVien, arrsinhVien);

    return (
      <div className="container">
        <div className="card text-left rounded-0">
          <div className="card-header bg-dark text-white">
            <h3>Thông tin sinh viên</h3>
          </div>
          <div className="card-body">
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                let arrSinhVienUpdate =
                  this.props.QuanLySinhVienReducer.arrsinhVien;
                for (let key of arrSinhVienUpdate) {
                  if (key.maSV.toString() === sinhVien.maSV) {
                    return alert("Mã SV đã tồn tại!!!");
                  }
                }
                if (
                  !sinhVien.maSV ||
                  !sinhVien.hoTen ||
                  !sinhVien.soDienThoai ||
                  !sinhVien.email
                ) {
                  return alert("Thông tin sinh viên không được để trống !!!");
                }
                const action = {
                  type: "HANDLE_SUBMIT",
                  sinhVien: sinhVien,
                };
                this.props.dispatch(action);
              }}
            >
              <div className="row">
                <div className="form-group col-6 mt-3">
                  <span>Mã SV</span>
                  <input
                    className="form-control"
                    id="maSV"
                    name="maSV"
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
                  <span className="text-danger"></span>
                </div>
                <div className="form-group col-6 mt-3">
                  <span>Họ Tên</span>
                  <input
                    className="form-control"
                    id="hoTen"
                    name="hoTen"
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
                  <span className="text-danger"></span>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-6 mt-3">
                  <span>Số điện thoại</span>
                  <input
                    className="form-control"
                    id="soDienThoai"
                    name="soDienThoai"
                    value={sinhVien.soDienThoai}
                    pattern="(84|0[3|5|7|8|9])+([0-9]{8})\b"
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
                  <span className="text-danger"></span>
                </div>
                <div className="form-group col-6 mt-3">
                  <span>Email</span>
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    value={sinhVien.email}
                    pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
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
                  <span className="text-danger"></span>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12 text-left">
                  <button id="submit" type="submit" className="btn btn-success">
                    Thêm sinh viên
                  </button>
                  <button
                    className="btn btn-warning mx-2"
                    type="button"
                    id="button"
                    style={{ display: "none" }}
                    onClick={() => {
                      const action = {
                        type: "CAP_NHAT_SV",
                        sinhVien: sinhVien,
                      };
                      this.props.dispatch(action);
                    }}
                  >
                    Cập nhật
                  </button>
                </div>
              </div>
              <div className="row mt-3">
                <div className="form-group col-9 ">
                  <input
                    // style={{boxShadow: 'none'}}
                    className="form-control me-1 search search rounded-pill border border-secondary"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                    onChange={(e) => {
                      const action = {
                        type: "SEARCH",
                        value: e.target.value,
                      };
                      this.props.dispatch(action);
                    }}
                  />
                </div>
                <div className="form-group col-3">
                  <button className="btn btn-outline-info rounded-circle">
                    <i className="fas fa-search" />
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
