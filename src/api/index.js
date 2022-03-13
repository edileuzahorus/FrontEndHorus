import axios from "axios";
const URL_API = "http://127.0.0.1:8000/api/";
export default {
  async create(data) {
    return await axios
      .post(`${URL_API}create/`, data)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  },
  async listAll() {
    return await axios
      .get(`${URL_API}list/`)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  },
  async update(data, id) {
    return await axios
      .put(`${URL_API}edit/${id}/`, data)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  },
  async delete(id) {
    return await axios
      .delete(`${URL_API}delete/${id}/`)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  },
};
