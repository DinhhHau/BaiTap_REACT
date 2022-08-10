import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    const { gioHang } = this.props;
    return (
      // <!-- Modal -->
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div
            className="modal-content"
            style={{ right: "150px", width: "800px" }}
          >
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẫm</th>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {gioHang.map((spGH, index) => {
                    return (<tr key={index}>
                        <td>{spGH.maSP}</td>
                        <td>
                          <img src={spGH.hinhAnh} width={50} height={50} />
                        </td>
                        <td>{spGH.tenSP}</td>
                        <td>{spGH.soLuong}</td>
                        <td>{spGH.giaBan}</td>
                        <td>{spGH.soLuong * spGH.giaBan}</td>
                        <td>{}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
              {/* <button type="button" className="btn btn-primary">
                Save
              </button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
