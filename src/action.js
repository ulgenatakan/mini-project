// types of action
const Types = {
  USER_LOGIN: "USER_LOGIN",
  USER_LOGOUT: "USER_LOGOUT",
  CREATE_QUERY: "CREATE_QUERY"
};
// actions
const userLogin = user => ({
  type: Types.USER_LOGIN,
  payload: user
});

const userLogout = user => ({
  type: Types.USER_LOGOUT,
  payload: user
});

const createQuery = query => ({
  type: Types.CREATE_QUERY,
  payload: query
});

export default {
  userLogin,
  userLogout,
  createQuery,
  Types
};
