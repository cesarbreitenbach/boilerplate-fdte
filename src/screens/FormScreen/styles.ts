import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_secondary};
`

export const Wrapper = styled.ScrollView.attrs({
})`
   height: 100%;
   background-color: #ccc;
`;

export const Form = styled.View`
   flex: 1;
   padding: 15px 20px;
`
export const Header = styled.View`
margin-top: ${RFValue(20)}px;
margin-bottom: ${RFValue(12)}px;
justify-content: center;
`;

export const Title = styled.Text`
    text-align: center;
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(16)}px;
   
`;

export const ButtonArea = styled.View`
   margin-top: ${RFValue(12)}px;
`