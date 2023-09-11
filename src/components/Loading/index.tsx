
import { ActivityIndicator } from 'react-native';
import { Container, Title } from './styles';

export default function Loading(){

return (
    <Container>
        <ActivityIndicator size={'large'} color="#DDD" />
        <Title>carregando...</Title>
    </Container>
);}