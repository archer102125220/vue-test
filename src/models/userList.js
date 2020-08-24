// import { GET_userList, /*SOCKET_UserList*/ } from './../services/userList';

export default {

    namespace:'userList',

    state: {
        users: []
    },
    actions: { //等於dvajs的effects
        *GET_UserList({ commit }, payload) {  // eslint-disable-line
            // const data = yield GET_userList();
            yield commit('set_user_list', payload);
        },
    },
    mutations: { //等於dvajs的reducers
        set_user_list(state, payload) {
            state = { ...state, users: payload };
            // return { ...state, users: payload };
        },
    }
};
