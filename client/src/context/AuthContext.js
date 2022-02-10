const { createContext } = require("react");


function noop() { }

export const AuthContext = createContext({
    tokin: null,
    userId: null,
    login: noop,
    logout: noop,
    isAuthenticated: false
})