const stateDefault = {
  arrsinhVien: [
    {
      maSV: 1,
      hoTen: "Nguyễn Đình Hậu",
      soDienThoai: "0909090909",
      email: "dhau99@gmail.com",
    },
    {
      maSV: 2,
      hoTen: "Đặng Thị Ngọc Ý",
      soDienThoai: "0809023909",
      email: "24thangg5@gmail.com",
    },
  ],
  sinhVien: {
    maSV: "",
    hoTen: "",
    soDienThoai: "",
    email: "",
  },
};

export const QuanLySinhVienReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "HANDEL_CHANGE_INPUT": {
      let { id, value } = action;
      state.sinhVien[id] = value;
      state.sinhVien = { ...state.sinhVien };
      return { ...state };
    }

    case "HANDLE_SUBMIT": {
      // lấy dữ liệu từ action ra
      let { sinhVien } = action;
      // clone state
      let arrSinhVienUpdate = [...state.arrsinhVien];
      arrSinhVienUpdate.push(sinhVien);
      // cập nhật lại state
      state.arrsinhVien = arrSinhVienUpdate;
      return { ...state };
    }

    case "XOA_SINH_VIEN": {
      // lấy dữ liệu từ action ra
      let { maSVClick } = action.payload;
      // clone state
      let arrSinhVienUpdate = [...state.arrsinhVien];
      // xoá sv bằng hàm filter
      arrSinhVienUpdate = arrSinhVienUpdate.filter(
        (sv) => sv.maSV !== maSVClick
      );
      // cập nhật lại state
      return { ...state, arrsinhVien: arrSinhVienUpdate };
    }

    case "SUA_SINH_VIEN": {
      let { SVClick } = action.payload;
      // console.log('sinhVien',SVClick)
      let sinhVienEdit = { ...state.sinhVien };
      sinhVienEdit = SVClick;
      // console.log(sinhVienEdit)
      return { ...state, sinhVien: sinhVienEdit };
    }

    case "CAP_NHAT_SV": {
      let { SVUpdate } = action.payload;
      console.log(SVUpdate);
    }

    default:
      return state;
  }
};
