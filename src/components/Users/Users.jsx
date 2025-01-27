import React from "react";
import module from "./Users.module.css"

let Users = (props) => {
    return (
        <div className={module.Users}>
            Users will be here!
            {
                props.users.map(e => <div key={e.id}>
                    <span>
                        <div><img className={module.UsersPhoto} src={e.photoUrl}
                                  alt={e.fullName + " avatar"}/></div>
                        <div>
                            {e.followed ? <button onClick={() => props.unfollow(e.id)}>follow</button> :
                                <button onClick={() => props.follow(e.id)}>unfollow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{e.fullName}</div>
                            <div>{e.status}</div>
                        </span>
                        <span>
                            <div>{e.location.country}</div>
                            <div>{e.location.city}</div>
                        </span>
                    </span>
                    <button onClick={() => {
                        props.setUsers(UsersToAdd)
                    }}>More ppl
                    </button>
                </div>)
            }
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