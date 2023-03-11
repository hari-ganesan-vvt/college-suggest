export const filterChangeReducer = (
  state = { predictorChangeData: "" },
  action
) => {
  switch (action.type) {
    case "FILTER_CHANGE_DATA":
      return { predictorChangeData: action.payload };
    // case "MEDIUM_CHANGE":
    //   return { predictorChangeData: action.payload };
    // case "HIGH_CHANGE":
    //   return { predictorChangeData: action.payload };

    default:
      return state;
  }
};
