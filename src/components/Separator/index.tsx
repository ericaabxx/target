import { ColorValue, View } from "react-native";

import { styles } from "./styles";

// O componente recebe uma prop "color"
// O tipo ColorValue é fornecido pelo React Native
// e aceita diferentes formatos de cores
export function Separator({ color }: {color: ColorValue}){
    return <View style={[styles.container, {backgroundColor: color}]}/>
}