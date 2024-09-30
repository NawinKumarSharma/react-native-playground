import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function () {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Library} />
            <Tab.Screen name="Liked" component={Liked} />
            <Tab.Screen name="Suggested" component={Suggested} />
        </Tab.Navigator>
    );
}
function Library() {
    return <View>
        <Text>library</Text>
    </View>
}
function Liked() {
    return <View>
        <Text>library</Text>
    </View>
}
function Suggested() {
    return <View>
        <Text>library</Text>
    </View>
}