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


      const binaryString = res.data.photo ? String.fromCharCode(...res.data.photo): null;
      const base64String = res.data.photo && binaryString ? btoa(binaryString): null;
      

      if(base64String)
      console.log(base64String.substring(0,40))

      console.log(res)
      return {... res.data, base64Image:base64String};
    } catch (err) {
      throw err;
    }
  },
  putUserProfile: async (
    name: String,
    bio: String,
    phone: String,
    photo: null
  ) => {
    try {

      console.log(0)
      const binaryString = atob(photo); 
      console.log(1)

      const bytes = new Uint8Array(binaryString.length);
      console.log(2)
    
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i); 
      }
      console.log(3)
    
      const res = await axios.put(`${baseUrl}/user/profile`, {
        name,
        bio,
        phone,
        photo: bytes
      });
      return res;
    } catch (err) {
      console.error(err)
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
