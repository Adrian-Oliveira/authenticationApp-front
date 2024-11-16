const baseUrl = import.meta.env.VITE_BACKEND_API_URL;
import axios from "axios";
export default {
  delUserTwoFactor:async()=>{
    try{
      const res = await axios.delete(`${baseUrl}/user/twofactor`)
      return res
    }
    catch(err){
      console.log(err)
    }
  },
  postUserTwoFactor:async(totp:String)=>{
    try{
      const res = await axios.post(`${baseUrl}/user/twofactor`, {totp})
      return res
    }
    catch(err){
      console.log(err)
    }
  },
  getUserTwoFactor:async()=>{
    try{
      const res = await axios.get(`${baseUrl}/user/twofactor`)
      return res
    }
    catch(err){
      console.log(err)
    }
  },
  getUserProfile:async()=>{
    try{
      const res = await axios.get(`${baseUrl}/user/profile`)
      return res
    }
    catch(err){
      console.log(err)
    }
  },
  postUserProfile:async(name:String, bio:String,phone:String, photo:Uint8Array)=>{
    try{
      const res = await axios.post(`${baseUrl}/user/profile`,{name, bio, phone, photo})
      return res

    }
    catch(err){
      console.log(err)
    }
  },
  postUserLoginWithEmail:async(email:String, password:String, totp:String = '')=>{
    try{    
      const res = await axios.post(`${baseUrl}/user/login`,{email, password, totp})
      return res
    }
    catch(err){
      console.log(err)
    }
  },
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
      return err
    }
  }
}

