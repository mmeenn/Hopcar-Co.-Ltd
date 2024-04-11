import axios from 'axios'

export const getCar = async (data) => {
    try {
      const res = await axios.get(`/car`);
      return res.data;
    } catch (err) {
      throw err;
    }
  };

export const addNewCar = async (data) => {
    try {
      const res = await axios.post(`/car`);
      return res.data;
    } catch (err) {
      throw err;
    }
  };

export const editCar = async (data) => {
    try {
      const res = await axios.put(`/car`);
      return res.data;
    } catch (err) {
      throw err;
    }
  };

export const deleteCar = async (data) => {
    try {
      const res = await axios.delete(`/car`);
      return res.data;
    } catch (err) {
      throw err;
    }
  };