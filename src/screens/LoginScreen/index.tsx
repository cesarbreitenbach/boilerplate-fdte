
import { useState } from 'react';

import { showMessage } from 'react-native-flash-message';
import { useTheme } from 'styled-components';
import Button from '../../components/Button';
import { Container, EmailInput, Footer, Title } from './styles';
import { useAuthContext } from '../../hooks/auth';


export default function LoginScreen(){
    const {loading, login} = useAuthContext()
    const theme = useTheme();
    const [email, setEmail] = useState<string>()

    function handleClick(){
        if(!email) {
            showMessage({
                message: "Digite um email!",
                type: "warning",
              });
            return;
        }
        login();
    }
return (
   <Container> 
        <Title>Qual seu email?</Title>
        <EmailInput 
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
        />
        <Footer>
            <Button loading={loading} title='Proximo' color={theme.colors.secundary} onPress={handleClick} light/>
        </Footer>
   </Container> 
);}