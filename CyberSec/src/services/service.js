
import * as axios from 'axios';


export const GetData = ()=> new Promise((resolve, reject) => {

    axios.get('http://localhost:3000/api/ttp')
        .then(res => {
            // console.log(res);
           return resolve(res.data)
        })
        .catch(function (error) {
            console.log(error);
            reject()
        });
    })