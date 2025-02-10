import React from "react";
import module from "./Users.module.css"
import axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        //alert('Strict Mode call 2 get called');
        axios.get("https://social-network.samuraijs.com/api/1.0/users", {
            params: {
                page: this.props.currentPage,
                count: this.props.pageSize
            }
        })
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount > 10 ? 300 : response.data.totalCount)
            });
    }

    getMoreUsers = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users", {params: {count: 5}})
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }
    onPageChange = (e) => {
        this.props.setCurrentPage(e);
        axios.get("https://social-network.samuraijs.com/api/1.0/users", {params: {page: e, count: this.props.pageSize}})
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }
        return (
            <div className={module.Users}>
                <div>
                    {
                        pages.map(p => {
                            return <span className={this.props.currentPage === p && module.selectedPage}
                                         onClick={() => {
                                             this.onPageChange(p)
                                         }}>{p} </span>
                        })}
                    <span onClick={() => {
                        alert('next 10 page');
                    }}>... </span>
                </div>
                {
                    this.props.users.map(e => {
                        return <div key={e.id}>
                            {
                                <div className={module.ViewElement}>
                                    <table width={"60%"} className={module.table}>
                                        <tbody>
                                        <tr>
                                            <td rowSpan={3}><img className={module.UsersPhoto}
                                                                 src={e.photoUrl ? e.photoUrl : 'ava1.png'}
                                                                 alt={e.name + " avatar"}/></td>
                                            <td className={module.Left}>{e.name} </td>
                                            <td className={module.Right}>{"e.location.country"}</td>
                                        </tr>
                                        <tr>
                                            <td className={module.Left}>{e.status} </td>
                                            <td className={module.Right}>{"e.location.city"}</td>
                                        </tr>
                                        <tr>

                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className={module.Center}>{e.followed ?
                                                <button onClick={() => this.props.unfollow(e.id)}>follow</button> :
                                                <button onClick={() => this.props.follow(e.id)}>unfollow</button>}
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            }
                        </div>;
                    })
                }
                <div className={module.Button}>
                    <button onClick={() => {
                        this.getMoreUsers()
                    }}>More ppl
                    </button>
                </div>
            </div>
        )
    }
}

export default Users;