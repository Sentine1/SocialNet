let initialState ={
    Friends: [
        {name: "Person one", ava: "ava1.png"},
        {name: "Person two", ava: "ava2.png"},
        {name: "Person three", ava: "ava3.png"},
        {name: "Person four", ava: "ava4.png"},
        {name: "Person n", ava: "avan.png"}
    ],
};
const FriendsReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
    }
}

export default FriendsReducer;