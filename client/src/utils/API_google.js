import axios from "axios";

const googleURL = "https://www.googleapis.com/books/v1/volumes?q=";
const ApiKey = "AIzaSyA9tKYx1nmJSFvwAQz-W9pPpLr7lnMmfb0";

export default {

    searchbook: function(queryParams){
        return axios.get(googleURL + queryParams + "&key=" + ApiKey);
    }
};