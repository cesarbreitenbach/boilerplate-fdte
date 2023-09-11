import { TextInputProps } from 'react-native';
import { Container } from './styles';

interface Props extends TextInputProps{
    _ref?: any;
};

export function Input({_ref, ...rest}: Props){
    return(
        <Container ref={_ref} {...rest} />
    )
}