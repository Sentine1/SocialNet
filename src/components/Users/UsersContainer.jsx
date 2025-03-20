import {connect} from "react-redux";
import {
    follow, setCurrentPage, setIsFetching, setTotalCount, setUsers, toggleFollowingProgress, unfollow
} from "../../redux/UsersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../../assets/Preloader";
import {usersAPI} from "../../api/api";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalCount(data.totalCount > 10 ? 300 : data.totalCount)
            });
    }

    getMoreUsers = () => {
        this.props.setIsFetching(true);
        usersAPI.getUsers(this.props.currentPage,5).then(data => {
                this.props.setUsers(data.items);
            });
    }
    onPageChange = (e) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(e);
        usersAPI.getUsers(e,this.props.pageSize).then(data => {
                this.props.setIsFetching(false);
                this.props.setUsers(data.items);
            });
    }

    render() {

        return <>
            <div>
                {this.props.isFetching ? <Preloader/> : null}
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
                toggleFollowingProgress ={this.props.toggleFollowingProgress}
                followingInProgress = {this.props.followingInProgress}
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
        isFetching: state.UsersData.isFetching,
        followingInProgress: state.UsersData.followingInProgress
    }
};

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    setIsFetching,
    toggleFollowingProgress
})(UsersAPIComponent);

export default UsersContainer