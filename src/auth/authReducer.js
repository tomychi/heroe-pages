import { types } from "../types/types";
// const state = {
//     name: 'tomas',
//     logged: true,
// }
// const loginAction = {
//     type: types.login,
//     payload: {
//         name: 'tomas',
//         email: 'tomychi@gmail,com'
//     }
// } asi se ve la action
export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
        return {
            ...action.payload, //name: action.payload
            logged: true,
        };
        case types.logout:
        return {
            logged: false, // se borra lo demas
        };
        default:
        return state;
    }
}