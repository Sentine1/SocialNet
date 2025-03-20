import React from "react";
import module from "./Users.module.css"
import {NavLink} from "react-router-dom";
import axios from "axios";
import {userFollow, usersAPI, userUnfollow} from "../../api/api";

let Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (<div className={module.Users}>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && module.selectedPage}
                             onClick={() => {
                                 props.onPageChange(p)
                             }}>{p} </span>
            })}
            <span onClick={() => {
                alert('next 10 page');
            }}>... </span>
        </div>
        {props.users.map(e => {
            return <div key={e.id}>
                {<div className={module.ViewElement}>
                    <table width={"60%"} className={module.table}>
                        <tbody>
                        <tr>
                            <td rowSpan={3}><NavLink to={'/profile/' + e.id}>
                                <img className={module.UsersPhoto}
                                     src={e.photoUrl ? e.photoUrl : 'ava1.png'}
                                     alt={e.name + " avatar"}/>
                            </NavLink></td>
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
                                <button disabled={props.followingInProgress.some(id => id === e.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, e.id);
                                    usersAPI.userUnfollow().then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(e.id)
                                        }
                                        props.toggleFollowingProgress(false, e.id);
                                    })
                                }}>follow</button> :
                                <button disabled={props.followingInProgress.some(id => id === e.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, e.id);
                                    usersAPI.userFollow().then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(e.id)
                                        }
                                        props.toggleFollowingProgress(false, e.id);
                                    })
                                }}>unfollow</button>}
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>}
            </div>;

        })}
        <div className={module.Button}>
            <button onClick={() => {
                props.getMoreUsers()
            }}>More ppl
            </button>
        </div>
    </div>)
}

export default Users;