const initialState = {
    status: false,
    response: []
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_USERS_PENDING":
            return {
                status: "pending",
                response: []
            }

        case "GET_USERS_SUCCESS":
            return {
                status: "success",
                response: action.response
            }

        case "GET_USERS_FAILURE":
            return {
                status: "fail",
                response: []
            }

        default:
            return state
    }
}