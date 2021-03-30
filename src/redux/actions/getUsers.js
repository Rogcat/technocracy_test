import axios from 'axios'

export const getUsers = () => dispatch => {

    dispatch ({
        type: "GET_USERS_PENDING"
    })

    axios({
        method: 'GET',
        url: 'https://watchlater.cloud.technokratos.com/get/array',
    })
    .then(response => {
        dispatch ({
            type: "GET_USERS_SUCCESS",
            response: response.data
        })
    })
    .catch(errors => {
        console.log(errors)
        dispatch ({
            type: "GET_USERS_FAILURE"
        })
    })

    
}