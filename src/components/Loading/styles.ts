import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
   width: 100%;
   background-color: ${({theme}) => theme.colors.background_secondary};
   justify-content: center;
   align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  margin-top: ${RFValue(12)}px
`