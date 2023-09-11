import MaskInput from 'react-native-mask-input';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(MaskInput)`
   width: 100%;
   padding: 16px 18px;
   border-radius: 5px;
   margin-bottom: 8px;
   font-size: ${RFValue(14)}px;
   background-color: ${({theme}) => theme.colors.shape};
   color: ${({theme}) => theme.colors.text};
   font-family: ${({theme}) => theme.fonts.regular};
`;
