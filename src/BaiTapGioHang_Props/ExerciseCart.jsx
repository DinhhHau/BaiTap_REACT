import React, { Component } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";

// import dataPhone from "../Data/dataPhone.json";

const data = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/img/applephone.jpg",
  },
];

export default class ExerciseCart extends Component {
  state = {
    sanPhamChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/img/vsphone.jpg",
    },

    // phải là 1 mảng vì nếu thêm nhiều sản phẫm nó trả vê nhiều <tr></tr> và sẽ chứa trong mảng đó ( chứ ko phải {} vì {} không chứa được nhiều sản phẩm)
    gioHang: [
      {
      maSP: 1,
      tenSP: "VinSmart Live",
      giaBan: 5700000,
      hinhAnh: "./img/img/vsphone.jpg",
      soLuong:1,
      },
    ],
  };

  //  setState để xem chi tiết sản phẩm
  xemChiTiet = (sanPhamClick) => {
    // console.log(sanPhamClick);
    this.setState({
      sanPhamChiTiet: sanPhamClick
    })

  };

  //  setState để thêm giỏ hàng
  // Lấy dữ liệu tại component cha
  themGioHang = (sanPhamClick) => {
    // console.log(sanPhamClick);
    
    // từ sp được chọn tạo ra sp giỏ hàng
      let spGioHang = { maSP: sanPhamClick.maSP, tenSP: sanPhamClick.tenSP, giaBan: sanPhamClick.giaBan, hinhAnh: sanPhamClick.hinhAnh, soLuong:1,}
    
    // kiểm tra spClick có trong giỏ hàng chưa
      var gioHangCapNhat = [...this.state.gioHang];
      let index = gioHangCapNhat.findIndex(sp => sp.maSP === spGioHang.maSP);
        if (index !== -1) {
          // Sản phảm được click đã có trong this.state.gioHang
          gioHangCapNhat[index].soLuong += 1;
        }else {
          // Sản phảm được click chưa có trong this.state.gioHang
          gioHangCapNhat.push(spGioHang)
        }
    
        // Set state để component render lại
        this.setState({
          gioHang: gioHangCapNhat
        })
  }

  render() {
    let {tenSP,maSP,manHinh,heDieuHanh,cameraTruoc,cameraSau,ram,rom,giaBan,hinhAnh,} = this.state.sanPhamChiTiet;
    
    // tính tổng số lượng sản phẫm của giỏ hàng
    let tongSoLuong = this.state.gioHang.reduce((tsl,sanPham,index)=>{
      return tsl += sanPham.soLuong
    },0) 
    return (
      <div className="container">
        <h3 className="text-center text-success mt-2">Bài tập giỏ hàng</h3>
        <Cart gioHang={this.state.gioHang} />
        <div
          className="text"
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          {" "}
          <div className="text_left"></div>{" "}
          <span
            className="text-danger"
            style={{
              display: "block",
              cursor: "pointer",
              textAlign: "right",
              margin: "10px",
            }}
            data-bs-toggle="modal"
            data-bs-target="#modelId"
          >
            Giỏ hàng ( {tongSoLuong} )
          </span>
        </div>
        <ProductList themGioHang={this.themGioHang} xemChiTiet={this.xemChiTiet} data={data} />

        <div className="mt-5">
          <div className="row">
            <div className="col-4">
              <h3 className="text-center">{tenSP}</h3>
              <img src={hinhAnh} alt="" width={"300px"} />
            </div>
            <div className="col-8" style={{ textAlign: "left" }}>
              <h3>Thông số kỹ thuật</h3>
              <hr />
              <table className="table">
                <thead>
                  <tr>
                    <td>Màn Hình</td>
                    <td>{manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>{cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{cameraSau}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>{ram}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{rom}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
