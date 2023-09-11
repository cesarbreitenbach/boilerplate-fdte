import { useNavigation } from '@react-navigation/native';
import { createContext, ReactNode, useContext, useState } from 'react';
import { showMessage } from 'react-native-flash-message';

interface AuthProviderProps {
    children: ReactNode;
}

interface IAuthContextData {
    logged: boolean;
    loading: boolean;
    login: () => void;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({children}: AuthProviderProps) {
    const [logged, setLogged] = useState(false);
    const [loading, setLoading] = useState(false);
    const { navigate } = useNavigation<any>();

    async function login() {
        setLoading(true);
        try{
            setLogged(true);
            navigate('StackRoutes');
        }catch(e) {
            showMessage({
                message: "Credenciais invalidas",
                type: "danger",
              });
            return;
        }finally{
            setLoading(false);   
        }
    }

    return (
        <AuthContext.Provider value={{ logged, login, loading }}> 
            {children}
        </AuthContext.Provider> 
    );
}

function useAuthContext() {
   const context = useContext(AuthContext);

   return context;
}

export { AuthProvider, useAuthContext };


