import { Text, View } from "react-native";

type WelcomeProps = {
    name: string,
    age: number,
    gender: boolean
}
export default function Welcome(props: WelcomeProps) {
    return (
        <View>
            <Text>hello {props.name}</Text>
        </View>

    )

}