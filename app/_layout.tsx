import { Slot } from 'expo-router';
import { Stack } from 'expo-router/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
    return (
        <GestureHandlerRootView>
           <Slot /> 
        </GestureHandlerRootView>

    );
}
