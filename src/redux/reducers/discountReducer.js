import { APPLY_DISCOUNT, REMOVE_DISCOUNT } from '../actionTypes';

const initialState = {
  discount: 0, // diskon dalam persentase
  appliedCode: null, // menyimpan kode yang diterapkan
};

const discountReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_DISCOUNT:
      let discountValue = 0;

      // Cek kode promo yang valid
      if (action.payload === 'DISCOUNT10') {
        discountValue = 10;
      } else if (action.payload === 'DISCOUNT20') {
        discountValue = 20;
      }

      return {
        ...state,
        discount: discountValue,
        appliedCode: action.payload,
      };

    case REMOVE_DISCOUNT:
      return {
        ...state,
        discount: 0,
        appliedCode: null,
      };

    default:
      return state;
  }
};

export default discountReducer;