import React from 'react'
import { toggleModal } from '../../redux/actions/toggleModal'
import { connect } from 'react-redux'

import './Modal.css'

const Modal = (props) => {

    // render modal with user on click 
    return (
        <>
            {!props.isActive ? null :
                <div className="modal">
                    <div className="modal_bg" onClick={() => props.modalToggler(null, false)}></div>
                    <div className="modal_body">
                        <div className="modal_header">
                            <div className="modal_title">{`${props.data.fname} ${props.data.name}`}</div>
                            <div className="modal_closer" onClick={() => props.modalToggler(null, false)}></div>
                        </div>
                        <div className="modal_content">
                            <div className="text_field">{props.data.fname}</div>
                            <div className="text_field">{props.data.name}</div>
                            <div className="text_field">{props.data.mname}</div>
                            <select defaultValue={props.data.status} disabled>
                                <option value={0}>Заблокирован</option>
                                <option value={1}>Подписка активна</option>
                                <option value={2}>Приостановлен</option>
                            </select>
                        </div>
                        <div className="modal_tools">
                            <button disabled>Сохранить</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        modalToggler: (user, isActive) => dispatch(toggleModal(user, isActive)),
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.modal.selectedUser,
        isActive: state.modal.isActive
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
