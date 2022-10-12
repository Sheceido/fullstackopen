import axios from 'axios';
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
    return axios
        .get(baseUrl)
        .then(response => response.data)
}

const addPerson = (personObject) => {
    return axios
        .post(baseUrl, personObject)
        .then(response => response.data)
}

const updateNumber = (id, updatedObject) => {
    return axios
        .put(`${baseUrl}/${id}`, updatedObject)
        .then(response => response.data);
}

const deletePerson = (id) => {
    return axios
        .delete(`${baseUrl}/${id}`)
        .then(response => response);
}

const bookService = {getAll, addPerson, updateNumber, deletePerson}
export default bookService;