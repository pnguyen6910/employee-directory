import axios from 'axios'
//api baseurl
const BASEURL = 'https://randomuser.me/api/?results=50'

//sort table by at least one category   

//filter the users by at least one property

export default {
    search: function (query) {
        return axios.get(BASEURL + query)
    }
}