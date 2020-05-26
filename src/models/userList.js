import { GET_userList, /*SOCKET_UserList*/ } from './../services/userList';

export default {
    state: {
        users: [1]
    },
    actions: { //等於dvajs的effects
        *GET_UserList({ payload }, { call, put }) {  // eslint-disable-line
            const data = yield call(GET_userList);
            yield put({ type: 'set_user_list', payload: data });
        },
    },
    mutations: { //等於dvajs的reducers
        set_user_list(state, { payload }) {
            return { ...state, userList: payload };
        },
    }
};
