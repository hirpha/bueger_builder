import axios from "axios";

const instance = axios.create({
    baseURL:"https://burger-app-ebc90-default-rtdb.firebaseio.com/"
})


 export default instance