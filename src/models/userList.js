// import { GET_userList, /*SOCKET_UserList*/ } from './../services/userList';

export default {

    namespace: 'userList',

    state: {
        users: []
    },
    actions: { //等於dvajs的effects
        async GET_UserList({ commit }, payload) {  // eslint-disable-line
            // const data = await GET_userList();
            await commit('set_user_list', payload);
        },
    },
    mutations: { //等於dvajs的reducers
        set_user_list(state, payload) {
            console.log(state);
            state.users = payload;
        },
    }
};
