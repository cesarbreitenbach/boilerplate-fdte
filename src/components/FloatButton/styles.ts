import styled from 'styled-components/native';
import { Platform } from 'react-native';

interface FloatButtonProps {
  bottom?: number;
  right?: number;
  left?: number;
  top?: number;
  buttonSize?: number;
  buttonColor?: string;
}

export const Container = styled.TouchableHighlight<FloatButtonProps>`
   position: absolute;
   bottom: ${({bottom}) => bottom ? bottom : 40}px;
   right: ${({right}) => right ? right : 20}px;
   top: ${({ top }) => (top ? Platform.OS === 'ios' ? top+15+'px' : top+'px' : 'auto')};
   left: ${({ left }) => (left ? left+'px' : 'auto')};
   width: ${({buttonSize}) => buttonSize ? buttonSize : 70}px;
   height: ${({buttonSize}) => buttonSize ? buttonSize : 70}px;
   border-radius: 35px;
   background-color: ${({theme, buttonColor}) => buttonColor ? buttonColor : theme.colors.floatButton};
   justify-content: center;
   align-items: center;
   elevation: 10; 
   shadow-color: #000; 
   shadow-opacity: 0.3; 
   shadow-radius: 4px; 
 `