import { Text, View, Button } from "react-native";

import { useLocalSearchParams } from "expo-router";
import { router } from "expo-router";

export default function Transaction(){
    const params = useLocalSearchParams<{id: string}>()
    return(
        <View style={{flex: 1, justifyContent: "center"}} >
            <Text>ID: {params.id}</Text>
            <Button title="Nova Meta" 
            onPress={() => router.back()} />
        </View>
    )
}