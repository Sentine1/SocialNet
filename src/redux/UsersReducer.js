const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'ava1.png',
            fullName: "One",
            status: "I'm number",
            location: {country: "Russia", city: "Moscow"},
            followed: false
        },
        {
            id: 2,
            photoUrl: 'ava1.png',
            fullName: "Neo",
            status: "This is a matrix son",
            location: {country: "Zimbabwe", city: "Zhombe"},
            followed: false
        },
        {
            id: 3,
            photoUrl: 'ava2.png',
            fullName: "Noy",
            status: "Need worker made boot",
            location: {country: "Georgia", city: "Dzmuisi"},
            followed: true
        },
        {
            id: 4,
            photoUrl: 'ava3.png',
            fullName: "Mr bombastic four",
            status: "Lova lova",
            location: {country: "U.S.A", city: "Paris"},
            followed: false
        },
        {
            id: 5,
            photoUrl: 'avan.png',
            fullName: "Random person n",
            status: "Wrong person",
            location: {country: "China", city: "Lu'An"},
            followed: true
        },
    ],
};
const UsersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(e => {
                    if (e.id === action.userId)
                        return {...e, followed: true}
                    return e
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(e => {
                    if (e.id === action.userId)
                        return {...e, followed: false}
                    return e
                })
            };
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export default UsersReducer;