import * as Yup from "yup";

//validation
export const basicValidation = Yup.object().shape({
  rankId: Yup.string().required("Rank is required!"),
  stateId: Yup.string().required("State is required!"),
  casteId: Yup.string().required("Caste is required!"),
  courseList: Yup.string().required("Course is required!"),
  genderId: Yup.string().required("Gender is required!"),
});
