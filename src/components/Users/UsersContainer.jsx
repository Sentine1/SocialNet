import {connect} from "react-redux";
import {
    followSuccess,
    getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollowSuccess
} from "../../redux/UsersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../../assets/Preloader";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    getMoreUsers = () => {
        this.props.getUsers(this.props.currentPage, 5);
    }
    onPageChange = (e) => {
        this.props.setCurrentPage(e);
        this.props.getUsers(e, this.props.pageSize);
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
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
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
    follow: followSuccess,
    unfollow: unfollowSuccess,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
})(UsersAPIComponent);

export default UsersContainer