import { GET_userLogin, GET_userList/*,SOCKET_UserList*/ } from './../services/userList';

export default {

    namespace: 'userList',

    state: {
        users: [],
        token: ''
    },
    actions: { //等於dvajs的effects
        async GET_UserList({ commit }, { payload }) {  // eslint-disable-line
            const data = await GET_userList(payload);
            await commit('set_user_list', data);
        },
        async GET_userLogin({ commit }, { payload }) {
            const data = await GET_userLogin(payload);
            // console.log(data);
            await commit('set_token', data);
        },
    },
    mutations: { //等於dvajs的reducers
        set_user_list(state, payload) {
            state.users = payload;
        },
        set_token(state, payload) {
            state.token = payload;
        },
    }
};
