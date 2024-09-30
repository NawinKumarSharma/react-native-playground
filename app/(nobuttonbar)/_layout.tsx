import { Slot } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function () {
    return <SafeAreaView>
        <View style={{
            backgroundColor: "black"
        }}>
           <Text style={{
            color:"white"
           }}> HI FROM ACC</Text>
           <Slot />
        </View>
    </SafeAreaView>
}