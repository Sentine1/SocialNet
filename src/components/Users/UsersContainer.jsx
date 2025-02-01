import {connect} from "react-redux";
import Users, {UserCartView} from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/UsersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.UsersData.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (UserId) => {
            dispatch(followAC(UserId));
        },

        unfollow: (UserId) => {
            dispatch(unfollowAC(UserId));
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer