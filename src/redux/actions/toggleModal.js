export const toggleModal = (user, isActive) => (dispatch) =>{
    dispatch({
        type: "OPEN_MODAL",
        isActive: isActive,
        selectedUser: user
    })
}