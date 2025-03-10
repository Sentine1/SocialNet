import {connect} from "react-redux";
import {
    follow, setCurrentPage, setIsFetching, setTotalCount, setUsers, unfollow
} from "../../redux/UsersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../../assets/Preloader";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get("https://social-network.samuraijs.com/api/1.0/users", {
            withCredentials: true,
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
        axios.get("https://social-network.samuraijs.com/api/1.0/users", {withCredentials: true, params: {count: 5}})
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }
    onPageChange = (e) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(e);
        axios.get("https://social-network.samuraijs.com/api/1.0/users", {
            withCredentials: true,
            params: {page: e, count: this.props.pageSize}
        })
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
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

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    setIsFetching
})(UsersAPIComponent);

export default UsersContainer