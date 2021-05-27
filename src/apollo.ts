import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

const token = localStorage.getItem('token');
export const getInitialTheme: any = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem("color-theme")
        if (typeof storedPrefs === "string") {
            return storedPrefs
        }

        const userMedia = window.matchMedia("(prefers-color-scheme: dark)")
        if (userMedia.matches) {
            return "dark"
        }

        return "light"
    }
};
export const isLoggedInVar = makeVar(Boolean(token));

export const client = new ApolloClient({
    uri: process.env.REACT_APP_SERVER_URI,
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    isLoggedIn: {
                        read() {
                            return isLoggedInVar();
                        }
                    }
                }
            }
        }
    }),
})