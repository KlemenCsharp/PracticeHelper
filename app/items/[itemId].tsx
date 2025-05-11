import {Button, Text, View} from "react-native";
import {useLocalSearchParams, useRouter} from "expo-router";

export default function ItemDetailScreen() {
    const router = useRouter();
    const { itemId } = useLocalSearchParams();

    console.log("Local:", itemId);

    const onGoBack = (): void => {
        router.back();
    }

    return (
        <View>
            <Text>Card details</Text>
            <Button title={"Test back"} onPress={() => {onGoBack()}} />
        </View>
    )
}