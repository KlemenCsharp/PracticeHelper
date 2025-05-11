import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useRouter} from "expo-router";
import Card from "@/components/Card";


const testCardData = [
    {id: 1, title: 'Test card 1'},
    {id: 2, title: 'Test card 2'},
    {id: 3, title: 'Test card 3'},
    {id: 4, title: 'Test card 4'},
    {id: 5, title: 'Test card 5'},
    {id: 6, title: 'Test card 6'},
    {id: 7, title: 'Test card 7'},
]

export default function HomeScreen() {
    const router = useRouter();

    const handleCardPress = (id: number) => {
        router.navigate(`/items/${id}`);
    };

    return (
        <View>
            <Text>List of cards</Text>
            <FlatList
                data={testCardData}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                    <Card title={item.title} onPress={() => handleCardPress(item.id)}/>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({});
