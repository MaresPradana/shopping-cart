import { APPLY_DISCOUNT, REMOVE_DISCOUNT } from "../actionTypes";


export const applyDiscount = (code) => {
  return {
    type: APPLY_DISCOUNT,
    payload: code,
  };
};

export const removeDiscount = () => {
  return {
    type: REMOVE_DISCOUNT,
  };
};
