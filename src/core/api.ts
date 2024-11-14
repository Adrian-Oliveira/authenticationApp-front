const baseUrl = import.meta.env.VITE_BACKEND_API_URL;
import axios from "axios";
export default {
  delTwoFactor:()=>{},
  postTwoFactor:()=>{},
  getTwoFactor:()=>{},
  postProfile:()=>{},
  getProfile:()=>{},
  recoverPassword:()=>{},
  postLoginWithEmail:()=>{},
  postRegister: async(email:String, password:String)=>{
    try{

      const now = new Date();

      // Get the current timestamp in milliseconds
      const timestamp = now.getTime();

      // Create a Date object with the specified timezone
      const dateWithTimezone = new Date(timestamp);
      dateWithTimezone.setMinutes(dateWithTimezone.getMinutes() - dateWithTimezone.getTimezoneOffset());

      // Format the timestamp as ISO 8601 string with timezone
      const isoTimestamp = dateWithTimezone.toISOString();

      console.log(isoTimestamp);

      const res = await axios.post(`${baseUrl}/register`,{email, password, timestamp:isoTimestamp})
      return res
    }
    catch(err){

      console.log(err)
      
    }
  }
}
