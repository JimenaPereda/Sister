import axios from "axios";

export default {
 
  getUser: function() {
    return axios.get("/api/profile");
  },
  
  getSister: function() {
    return axios.get("/api/sister");
  },
  
};