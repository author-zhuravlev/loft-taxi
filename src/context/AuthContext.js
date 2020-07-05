import { createContext } from 'react';

const fn = () => {}

const AuthContext = createContext({
    logIn: fn,
    logOut: fn,
    name: null,
    password: null,
    isAuthenticated: false
});

// const AuthProvider = ({ children }) => {
//     const [isAuthorized, setAuthorization] = useState(false);

//     const logIn = (email, password) => {
//         if (email !== 'test@mail.ru' || password !== 'correct') return;

//         setAuthorization(true);
//     }

//     const logOut = () => {
//         setAuthorization(false);
//     }

//     return {logIn, logOut, isAuthorized}
    // return (
    //     <AuthContext.Provider value={{logIn, logOut, isAuthorized}}>
    //         {children}
    //     </AuthContext.Provider>
    // )
// }

// const withAuth = wrapperComponent => {
//     return class withAuth extends React.Component {
//         render() {
//             return (
//                 <AuthContext.Consumer>
//                     {
//                         (value) => {
//                             return <wrapperComponent {...value} {...this.props} />
//                         }
//                     }
//                 </AuthContext.Consumer>
//             )
//         }
//     }
// }

export default AuthContext