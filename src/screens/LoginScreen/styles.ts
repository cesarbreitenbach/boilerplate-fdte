import MaskInput, { Masks } from 'react-native-mask-input';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1; 
  background-color: ${({theme}) => theme.colors.background_secondary};
  align-items: center;
  justify-content: center;
`
export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium };
    font-size: ${RFValue(16)}px;
    color: ${({theme}) => theme.colors.text};
`

export const EmailInput = styled.TextInput`
    padding: 14px 20px;
    font-family: ${({theme}) => theme.fonts.regular };
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(14)}px;
    border-width: 1px;
    border-radius: 5px;
    border-color: ${({theme}) => theme.colors.text_detail};
    margin-top: ${RFValue(12)}px;
    width: 80%;
`

export const Footer = styled.View`
   width: 100%;
   justify-content: center;
   align-items: center;
   margin-top: ${RFValue(30)}px;
`