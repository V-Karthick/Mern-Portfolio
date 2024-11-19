import axios from "axios"
const api = "http://localhost:8000"

const editProfile = (id,name, content) => {axios.put(`${api}/user/edit/${id}`,{name, content})
console.log(id, name, content)
}
    

const viewProfile=()=>axios.get(`${api}/user/view`)



export {editProfile, viewProfile}