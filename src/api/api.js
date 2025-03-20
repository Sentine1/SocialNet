import axios from "axios";

const instance = axios.create({
    withCredentials: false, baseURL: 'https://social-network.samuraijs.com/api/1.0/', // headers: {
    //     "API-KEY": "b1775b2f-c3a5-4509-b8dc9-90b5629de7c3"
    // }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get("users", {
            params: {
                page: currentPage, count: pageSize
            }
        })
            .then(response => {
                return response.data;
            })
    },

    userFollow() {
        return instance.post("users", {}, {})
    },

    userUnfollow() {
        return instance.delete("users")
    }
}

export const authAPI = {
    authMe(currentPage, pageSize) {
        return instance.get("auth/me", {
            params: {
                page: currentPage, count: pageSize
            }
        })
    }
}