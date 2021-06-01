import { createContext, useCallback, useState } from "react";
//
// import { io } from 'socket.io-client';
// import { User } from "./user";
//
// interface UserData {
//   user: User;
//   login(user: User): void;
// }
//
// const UserContext = createContext<UserData>({} as UserData);
//
// export const UserProvider = ({ children }) => {
//
//   const [user, setUser] = useState<User>(() => {
//    const userStorage = localStorage.getItem('chat-podre-user');
//
//    if(userStorage) {
//       return JSON.parse(userStorage) as User;
//    }
//    return {} as User;
//   });
//
//   const login = useCallback((user: User) => {
//     return io("ws://localhost:8080/chat/" + user.workspace + "/" + user.name);
//   }, []);
//
//   return (
//   <UserContext.Provider value={{user, login }}>
//     {children}
//   </UserContext.Provider>)
// }




