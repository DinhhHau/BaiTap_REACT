import { DAT_GHE, HUY_GHE } from "../types/BaiTapDatVeType";

export const datGheAction = (ghe) => {
  return {
    type: DAT_GHE,
    payload: {
      ghe1: ghe,
    },
  };
};

export const huyGheAction = (gheDangDat) => {
  return {
    type: HUY_GHE,
    payload: {
      soGhe1: gheDangDat,
    },
  };
};
