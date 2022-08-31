import { DAT_GHE, HUY_GHE } from "../types/BaiTapDatVeType";

const stateDefault = {
  danhSachGheDangDat: [
    { soGhe: "A1", gia: 1000 },
    { soGhe: "B3", gia: 1000 },
  ],
};

export const BaiTapDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let { ghe1 } = action.payload;
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];

      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe1.soGhe
      );
      if (index !== -1) {
        // Khi người dùng click Ghế đang đặt đã có trong mảng => remote đi
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        //khi người dùng click Ghê đang đặt chưa có trong mảng => push vào mảng
        danhSachGheDangDatUpdate.push(ghe1);
      }
      return { ...state, danhSachGheDangDat: danhSachGheDangDatUpdate };
    }
    case HUY_GHE: {
      let { soGhe1 } = action.payload;
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];

      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === soGhe1
      );
      if (index !== -1) {
        // Khi người dùng click Ghế đang đặt đã có trong mảng => remote đi
        danhSachGheDangDatUpdate.splice(index, 1);
      }
      return { ...state, danhSachGheDangDat: danhSachGheDangDatUpdate };
    }
    default:
      return state;
  }
};
