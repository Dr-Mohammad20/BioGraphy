import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

const getCourses = async () => {
  const response = await axios.get(`${BASE_URL}/getCourses`);
  return (response.data);
}

const getCourse = async (id) => {
  const response = await axios.get(`${BASE_URL}/getCourse/${id}`);
  return (response.data[0]);
}

const deleteCourse = (id) => {
  axios.delete(`${BASE_URL}/deleteCourse/${id}`);
}

const updateCourse = async (id, name, zaman, hazine, tozihat) =>{
  axios.put(`${BASE_URL}/updateCourse` , {
    id : id,
    name_dore : name,
    zaman_dore: zaman,
    hazine_dore: hazine,
    tozihate_dore: tozihat
  })
}

const insertCourse = (name, zaman, hazine, tozihat) =>{
  axios.post(`${BASE_URL}/InsertNewCourse`, {
    name_dore: name,
    zaman_dore: zaman,
    hazine_dore: hazine,
    tozihate_dore: tozihat
});
}

export {getCourses, deleteCourse, updateCourse, insertCourse, getCourse}