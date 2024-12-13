const baseUrl = import.meta.env.VITE_BACKEND_API_URL;
import axios from "axios";
axios.defaults.withCredentials = true
export default {
  delUserTwoFactor: async () => {
    try {
      const res = await axios.delete(`${baseUrl}/user/twofactor`);
      return res;
    } catch (err) {
      console.log(err);
    }
  },
  postUserTwoFactor: async (totp: String) => {
    try {
      const res = await axios.post(`${baseUrl}/user/twofactor`, { totp });
      return res;
    } catch (err) {
      console.log(err);
    }
  },
  getUserTwoFactor: async () => {
    try {
      const res = await axios.get(`${baseUrl}/user/twofactor`);
      return res;
    } catch (err) {
      console.log(err);
    }
  },
  postGenerateTokenToResetPassword: async (email: String) => {
    try {
      const res = await axios.post(`${baseUrl}/resetPassword/generateToken`, {
        email,
      });
      return res;
    } catch (err) {
      throw err;
    }
  },
  postNewPasswordWithToken: async (token: String, newPassword: String) => {
    try {
      const res = await axios.post(`${baseUrl}/resetPassword/withEmailToken`, {
        token,
        newPassword,
      });
      return res;
    } catch (err) {
      throw err;
    }
  },
  getUserProfile: async () => {
    try {
      const res = await axios.get(`${baseUrl}/user/profile`);
        // Create a Blob from the Uint8Array
      const blob = new Blob([res.data.photo], { type: 'image/png' }); // Adjust the MIME type as needed

      // Create a Data URL
      const imageUrl = URL.createObjectURL(blob);

      console.log(res)

      return {... res.data, imageUrl};
    } catch (err) {
      throw err;
    }
  },
  putUserProfile: async (
    name: String,
    bio: String,
    phone: String,
    photo: String
  ) => {
    try {
      const res = await axios.put(`${baseUrl}/user/profile`, {
        name,
        bio,
        phone,
      });
      return res;
    } catch (err) {
      throw err;
    }
  },
  postUserLoginWithEmail: async (
    email: String,
    password: String,
    totp: String = ""
  ) => {
    try {
      const res = await axios.post(`${baseUrl}/user/login`, {
        email,
        password,
        totp,
      });
      return res;
    } catch (err) {
      throw err;
    }
  },
  postRegister: async (email: String, password: String) => {
    try {
      const now = new Date();

      // Get the current timestamp in milliseconds
      const timestamp = now.getTime();

      // Create a Date object with the specified timezone
      const dateWithTimezone = new Date(timestamp);
      dateWithTimezone.setMinutes(
        dateWithTimezone.getMinutes() - dateWithTimezone.getTimezoneOffset()
      );

      // Format the timestamp as ISO 8601 string with timezone
      const isoTimestamp = dateWithTimezone.toISOString();

      const res = await axios.post(`${baseUrl}/register`, {
        email,
        password,
        timestamp: isoTimestamp,
      });
      return res;
    } catch (err) {
      throw err;
    }
  },
};
