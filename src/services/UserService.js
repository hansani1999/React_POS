import axios from "../axios";

class UserService {
    postUser = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('user', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    fetchUser = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('users')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    putUser = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('user', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    deleteUser = async (id) => {
        let params = {
            id:id
        }

        const promise = new Promise((resolve, reject) => {
            axios.delete('user',{params:params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };
}
export default new UserService();