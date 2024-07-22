import {useState} from "react";
import Cookies from "js-cookie";
import {COOKIE_ITEMS} from "../constants";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!Cookies.get(COOKIE_ITEMS.AUTH_TOKEN));
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    const login = async  (token: string) => {
        return new Promise<boolean>(
            (resolve, reject) => {
                if (token) {
                    Cookies.set(COOKIE_ITEMS.AUTH_TOKEN, token);
                    setIsAuthenticated(true);
                    resolve(true);
                } else {
                    reject(false);
                }
            }
        )
    }
    const logout = () => {
        Cookies.remove(COOKIE_ITEMS.AUTH_TOKEN);
        return setIsAuthenticated(false);
    };
    const getToken = () => Cookies.get(COOKIE_ITEMS.AUTH_TOKEN);
    return {isAuthenticated, login, logout, getToken}
}
export default useAuth;