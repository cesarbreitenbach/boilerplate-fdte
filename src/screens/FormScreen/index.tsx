import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Button } from '../../components/Form/Button';
import { InputForm } from '../../components/Form/InputForm';
import { ButtonArea, Container, Form, Header, Title, Wrapper } from './styles';
import { exampleValidator } from '../../validators/exampleValidator';

export default function FormScreen(){
   const { 
      control,
      handleSubmit,
      formState: {errors}
  } = useForm({
      resolver: yupResolver(exampleValidator)
  });

  function handleRegister(){
   console.log('executou acao do click')
  }

return (
   <Container> 
      <KeyboardAvoidingView
         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
         keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20} // Ajuste esse valor conforme necessário
         contentContainerStyle={{ flex: 1 }} // Adicione essa propriedade
      >
         <Wrapper >
            <Header>
               <Title>Dados do form</Title>
            </Header>
            <Form>
               <InputForm 
                  control={control}
                  name="name" 
                  placeholder='Nome'
                  autoCapitalize='sentences'
                  autoCorrect={false}
                  error={errors.name && errors.name.message}
               />
               <InputForm 
                  control={control}
                  name="whatsapp" 
                  placeholder='whatsapp'
                  autoCorrect={false}
                  error={errors.whatsapp && errors.whatsapp.message}
               />
               <InputForm 
                  control={control}
                  name="email" 
                  placeholder='Email'
                  autoCorrect={false}
                  error={errors.email && errors.email.message}
               />
               <InputForm 
                  control={control}
                  name="cep" 
                  placeholder='CEP'
                  autoCorrect={false}
                  error={errors.cep && errors.cep.message}
               />
               <InputForm 
                  control={control}
                  name="street" 
                  placeholder='Rua'
                  autoCorrect={false}
                  error={errors.street && errors.street.message}
               />
               <InputForm 
                  control={control}
                  name="number" 
                  placeholder='Numero'
                  autoCorrect={false}
                  error={errors.number && errors.number.message}
               />
        
               <ButtonArea>
                  <Button title='Proximo' onPress={handleSubmit(handleRegister)}/>
               </ButtonArea>
            </Form>
         </Wrapper>
      </KeyboardAvoidingView>
   </Container> 
);}
