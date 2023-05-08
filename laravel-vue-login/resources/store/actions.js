let actions = {
    fetchUsers({commit}) {
        axios.get('/api/users')
            .then(res => {
                commit('FETCH_USERS', res.data)
            }).catch(err => {
            console.log(err)
        })
    }
}

export default actions
