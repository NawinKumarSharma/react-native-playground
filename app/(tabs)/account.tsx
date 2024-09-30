import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function () {
    return <View>
        <Text>This is my account page</Text>
        <Link href={"/acc/accountinfo"}>
            <Text>account info</Text>
        </Link>
    </View>
}