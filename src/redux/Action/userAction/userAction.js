import axios from "axios";
import { BASE_URL } from "../../../baseUrl";

//login
export const userLogin = (mobile) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${BASE_URL}/user/validatePhoneNumber`,
      { mobile },
      config
    );
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log(error);
    dispatch({ type: "USER_LOGIN_FAIL", payload: error });
  }
};

//logout
export const userLogout = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${BASE_URL}/user/userLogout`,

      config
    );
    localStorage.removeItem("userInfo");
    dispatch({ type: "USER_LOGOUT", payload: data });
  } catch (error) {
    console.log(error);
  }
};

//signup
export const userSignup = (name, email, mobile) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${BASE_URL}/user/userSignUp`,
      { name, email, mobile },
      config
    );
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: data });
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "USER_REGISTER_FAIL", payload: error });
  }
};
