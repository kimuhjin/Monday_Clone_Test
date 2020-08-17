const LOGIN = "LOGIN";
export const Login = (user) => ({ type: LOGIN, user });
const initialState = "";
export default function LoginUser(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      let state = action.user;
      return state;
    }
    default:
      return state;
  }
}
