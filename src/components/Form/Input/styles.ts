import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TextInput)`
   width: 100%;
   padding: ${RFValue(16)}px ${RFValue(18)}px;
   border-radius: 5px;
   margin-bottom: 8px;
   font-size: ${RFValue(14)}px;
   background-color: ${({theme}) => theme.colors.shape};
   color: ${({theme}) => theme.colors.text};
   font-family: ${({theme}) => theme.fonts.regular};
`;
