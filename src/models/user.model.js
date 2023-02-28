import instance from "../utils/axios.utils";

const user = {
  userLogin: (data) => {
    let promise = new Promise((resolve, reject) => {
      let url = "/user/validatePhoneNumber";
      instance()
        .post(url, data)
        .then((res) => {
          console.log(res);
          resolve(res);
        })
        .catch((error) => {
          if (error.response) {
            reject(error.response.data.message);
          } else {
            reject(error);
          }
        });
    });

    return promise;
  },

  userLogout: (data) => {
    let promise = new Promise((resolve, reject) => {
      let url = "/user/userLogout";
      instance()
        .post(url, data)
        .then((res) => {
          console.log(res);
          resolve(res);
        })
        .catch((error) => {
          if (error.response) {
            reject(error.response.data.message);
          } else {
            reject(error);
          }
        });
    });

    return promise;
  },

  userSignup: (name, email, mobile) => {
    let promise = new Promise((resolve, reject) => {
      let url = "/user/userSignUp";
      instance()
        .post(url, { name, email, mobile })
        .then((res) => {
          console.log(res);
          resolve(res);
        })
        .catch((error) => {
          if (error.response) {
            reject(error.response.data.message);
          } else {
            reject(error);
          }
        });
    });

    return promise;
  },
};

export default user;
