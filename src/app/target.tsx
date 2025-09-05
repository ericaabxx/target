import { Text, View, Button } from "react-native";

import { router } from "expo-router";

export default function Target(){
    return (
        <View style={{flex: 1, justifyContent: "center"}} >
            <Text>Voltar</Text>
                <Button title="Nova Meta" 
                onPress={() => router.back()} />
            </View>
    )
}