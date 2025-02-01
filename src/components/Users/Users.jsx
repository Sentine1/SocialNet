import React from "react";
import module from "./Users.module.css"

let Users = (props) => {
    return (
        <div className={module.Users}>
            {
                props.users.map(e => {
                    return <div key={e.id}>
                        {
                            <div className={module.ViewElement}>
                                <table width={"60%"} className={module.table}>
                                    <tbody>
                                    <tr>
                                        <td rowSpan={3}><img className={module.UsersPhoto} src={e.photoUrl}
                                                             alt={e.fullName + " avatar"}/></td>
                                        <td className={module.Left}>{e.fullName} </td>
                                        <td className={module.Right}>{e.location.country}</td>
                                    </tr>
                                    <tr>
                                        <td className={module.Left}>{e.status} </td>
                                        <td className={module.Right}>{e.location.city}</td>
                                    </tr>
                                    <tr>

                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td className={module.Center}>{e.followed ?
                                            <button onClick={() => props.unfollow(e.id)}>follow</button> :
                                            <button onClick={() => props.follow(e.id)}>unfollow</button>}
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
                    props.setUsers(UsersToAdd)
                }}>More ppl
                </button>
            </div>
        </div>
    )
}

let id = 6;
let UsersToAdd =
    [
        {
            id: id,
            photoUrl: 'ava1.png',
            fullName: "One " + id,
            status: "I'm number",
            location: {country: "Russia", city: "Moscow"},
            followed: false
        },
        {
            id: id + 1,
            photoUrl: 'ava1.png',
            fullName: "Neo " + (id + 1),
            status: "This is a matrix son",
            location: {country: "Zimbabwe", city: "Zhombe"},
            followed: false
        }
    ]

export default Users;