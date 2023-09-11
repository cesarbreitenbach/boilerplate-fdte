import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container } from './styles';

interface FloatButtonProps {
   handlePress: () => void;
   iconName?: string;
   top?: number;
   left?: number;
   right?: number;
   bottom?: number;
   size?: number;
   buttonSize?: number;
   buttonColor?: string;
}

export default function FloatButton({iconName = 'cube-send', handlePress, top, left, right, bottom, size = 30, buttonSize=70, buttonColor}: FloatButtonProps){

function handleClick() {
   handlePress();
}

return (
   <Container buttonColor={buttonColor} buttonSize={buttonSize} underlayColor="green" top={top} left={left} bottom={bottom} right={right} activeOpacity={0.7} onPress={handleClick} > 
      <Icon name={iconName} size={size} color="white"/>
   </Container> 
);}