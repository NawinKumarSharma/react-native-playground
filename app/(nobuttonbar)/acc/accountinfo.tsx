import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function accountinfo() {
    return <SafeAreaView>
        <View>
            <Text style={{
                color:"red"
            }}>account info page</Text>
        </View>
    </SafeAreaView>
}