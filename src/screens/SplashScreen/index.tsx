import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { Brand, Container } from './styles';


export default function Splash(){
    
    const navigation = useNavigation<any>();
    const splashAnimation = useSharedValue(0);

    const brandStyle = useAnimatedStyle(() => {
        return { 
            opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, .3, 1]),
            transform: [
                {
                    translateX: interpolate(splashAnimation.value, [0, 50], [-50, 0], Extrapolate.CLAMP)
                }
            ]
        }
    })

    async function startApp(){
       navigation.navigate('initial');
    }

    useEffect(() => {
        splashAnimation.value = withTiming( 
            50, 
            {duration: 2500},
            () => {
                'worklet'
                runOnJS(startApp)()
            })
    }, [])

return (
   <Container> 
      <Animated.View style={[brandStyle, {position: 'absolute'}]}> 
      <Brand>Animação para tela de splash</Brand>
      </Animated.View>
   </Container> 
);}