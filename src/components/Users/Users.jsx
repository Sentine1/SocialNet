import React from "react";
import module from "./Users.module.css"
import axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        alert('Error mount 2 times ToDo  fix');
        axios.get("https://social-network.samuraijs.com/api/1.0/users", {params: {count: 2}})
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    getMoreUsers = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users", {params: {count: 5}})
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <div className={module.Users}>
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