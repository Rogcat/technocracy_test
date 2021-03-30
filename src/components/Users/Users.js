import moment from 'moment'
import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getUsers } from '../../redux/actions/getUsers'
import { toggleModal } from '../../redux/actions/toggleModal'

import './Users.css'
import 'moment/locale/ru'
import '../../App.css'


const Users = (props) => {

    //first load users

    useEffect(() => {
        props.getUsers();
    }, []);

    //render users

    return (
        <div className="users">
            {!props.users.response ? null : props.users.response.map(user => (
                <div className='user' key={user.id} onClick={() => props.modalToggler(user, true)}>
                    <div className="user_info">
                        <div className="user_avatar" style={{ backgroundImage: `url(${user.avatar})` }} onClick={(event) => event.stopPropagation()}></div>
                        <div className="user_name" onClick={(event) => event.stopPropagation()}>{`${user.name} ${user.mname[0]}. ${user.fname[0]}.`}</div>
                    </div>
                    <div className="user_balance" onClick={(event) => event.stopPropagation()} >{`${Intl.NumberFormat('ru-RU').format(user.balance.toFixed(2))}`}</div>
                    <div className="user_update" onClick={(event) => event.stopPropagation()} >{`Последнее обновление ${moment(user.lastUpdatedAt).fromNow()}`}</div>
                    <div className="user_status" onClick={(event) => event.stopPropagation()}>
                        <select defaultValue={user.status} >
                            <option value={0} disabled>Заблокирован</option>
                            <option value={1} disabled>Подписка активна</option>
                            <option value={2} disabled>Приостановлена</option>
                        </select>
                    </div>
                </div>
            ))}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsers()),
        modalToggler: (user, isActive) => dispatch(toggleModal(user, isActive))
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)