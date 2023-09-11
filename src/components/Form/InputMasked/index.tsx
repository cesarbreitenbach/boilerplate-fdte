
import { Control, Controller } from 'react-hook-form';
import { MaskInputProps } from 'react-native-mask-input';
import { Masked } from '../../Masked';
import { Container, Error } from './styles';

interface Props extends MaskInputProps {
    control: Control<any>;
    name: string;
    error: any;
    disable?: boolean;
}

export function InputMasked({ disable=false, control,name, error, ...rest }: Props){
    return(
        <Container>
            <Controller
              control={control}
              render={({ field: { onChange, value }}) => (
                <Masked 
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