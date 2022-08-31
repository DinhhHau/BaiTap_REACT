import { combineReducers, createStore } from "redux";
import { BaiTapDatVeReducer } from "./reducers/BaitapDatVeReducer";
import { QuanLySinhVienReducer } from "./reducers/QuanLySinhVienReducer";

const rootReducer = combineReducers({
  number: 1,
  QuanLySinhVienReducer: QuanLySinhVienReducer,
  BaiTapDatVeReducer: BaiTapDatVeReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
