
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { Input } from '../Input';
import { Container, Error } from './styles';

interface Props extends TextInputProps {
    control: Control<any>;
    name: string;
    error: any;
    disable?: boolean;
    _ref?: any;
}

export function InputForm({ _ref, disable=false, control,name, error, ...rest }: Props){
    return(
        <Container>
            <Controller
              control={control}
              render={({ field: { onChange, value }}) => (
                <Input 
                    _ref={_ref}
                    editable={!disable}
                    onChangeText={onChange}
                    value={value}
                    {...rest}
                />
              )}
              name={name}
            /> 
            {error && <Error>{error}</Error>}
        </Container>
    )
}