import { createContext, useState } from "react";

export const UserContext = createContext({
    loggedInUser:"default User",
    isLoggedIn:false
});
