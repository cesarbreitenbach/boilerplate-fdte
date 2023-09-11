import { MaskInputProps } from 'react-native-mask-input';
import { Container } from './styles';

type Props = MaskInputProps;

export function Masked({...rest}: Props){
    return(
        <Container {...rest} />
    )
}