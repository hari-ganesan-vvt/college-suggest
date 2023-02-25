export const responseReducer = (state = { predictorallData: [] }, action) => {
  switch (action.type) {
    case "USER_DATA_REQUEST":
      return { loading: true, predictorallData: [] };
    case "USER_DATA_SUBMIT":
      return {
        loading: false,
        predictorallData: action.payload,
      };
    case "USER_DATA_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
