import {connect} from "react-redux";
import {
    follow, setCurrentPage, setIsFetching, setTotalCount, setUsers, unfollow
} from "../../redux/UsersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import loader from "../../assets/images/LoaderGuy.gif"

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        //alert('Strict Mode call 2 get called');
        this.props.setIsFetching(true);
        axios.get("https://social-network.samuraijs.com/api/1.0/users", {
            params: {
                page: this.props.currentPage, count: this.props.pageSize
            }
        })
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount > 10 ? 300 : response.data.totalCount)
            });
    }

    getMoreUsers = () => {
        this.props.setIsFetching(true);
        axios.get("https://social-network.samuraijs.com/api/1.0/users", {params: {count: 5}})
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }
    onPageChange = (e) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(e);
        axios.get("https://social-network.samuraijs.com/api/1.0/users", {params: {page: e, count: this.props.pageSize}})
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        return <>
            <div>
                {this.props.isFetching ? <img src={loader} alt="loader svg"/> : null}
            </div>
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                users={this.props.users}
                getMoreUsers={this.getMoreUsers}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.UsersData.users,
        pageSize: state.UsersData.pageSize,
        totalUsersCount: state.UsersData.totalUsersCount,
        currentPage: state.UsersData.currentPage,
        isFetching: state.UsersData.isFetching
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (UserId) => {
//             dispatch(followAC(UserId));
//         },
//
//         unfollow: (UserId) => {
//             dispatch(unfollowAC(UserId));
//         },
//
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         }, setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         }, setTotalCount: (usersCount) => {
//             dispatch(setTotalCountAC(usersCount))
//         }, setIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching))
//         }
//     }
// };

const UsersContainer = connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalCount, setIsFetching})(UsersAPIComponent);

export default UsersContainer