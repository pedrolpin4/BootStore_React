import axios from 'axios';

const API = axios.create({
    baseURL: "postgres://adaejocmexjqsb:d65fdf40686cfb0a23f7deed80fb55f69b844970d1616b2ca24bde2d24482e54@ec2-44-197-136-81.compute-1.amazonaws.com:5432/d54035rhoiodhv",
})

export default API;