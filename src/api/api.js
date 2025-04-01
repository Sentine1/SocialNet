import axios from "axios";

const instance = axios.create({
    withCredentials: false, baseURL: 'https://social-network.samuraijs.com/api/1.0/', // headers: {
    //     "API-KEY": "b1775b2f-c3a5-4509-b8dc9-90b5629de7c3"
    // }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users`, {
            params: {
                page: currentPage, count: pageSize
            }
        })
            .then(response => {
                return response.data;
            })
    },

    userFollow(userId) {
        return instance.post(`users/${userId}`, {}, {})
    },

    userUnfollow(userId) {
        return instance.delete(`users/${userId}`)
    },
    getProfile(userId) {
        return axios.get(`profile/${userId}`, {
            params: {}
        });
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`, {})
    }
}