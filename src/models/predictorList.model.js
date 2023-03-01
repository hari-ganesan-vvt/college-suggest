import instance from "../utils/axios.utils";

const predictorList = {
  formSubmitData: (values) => {
    let promise = new Promise((resolve, reject) => {
      let url = "/predictor/predictorResList";
      instance()
        .post(url, values)
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });

    return promise;
  },

  filterCourseList: (filtervalues) => {
    let promise = new Promise((resolve, reject) => {
      let url = "/predictor/predictorStateResList";
      instance()
        .post(url, filtervalues)
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });

    return promise;
  },

  stateList: () => {
    let promise = new Promise((resolve, reject) => {
      let url = "/predictor/predictorStateList";
      instance()
        .post(url)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  },

  casteList: () => {
    let promise = new Promise((resolve, reject) => {
      let url = "/predictor/predictorCasteList";
      instance()
        .post(url)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  },

  courseList: () => {
    let promise = new Promise((resolve, reject) => {
      let url = "/predictor/predictorCourseList";
      instance()
        .post(url)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  },
};

export default predictorList;
