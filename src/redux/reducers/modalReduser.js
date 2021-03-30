const initialState = {
    isActive: false,
    selectedUser: null
}

export const modalReduser = (state = initialState, action) => {
    switch(action.type) {
        case "OPEN_MODAL":
            return {
                isActive: action.isActive,
                selectedUser: action.selectedUser
            }

        default:
            return state
    }
}