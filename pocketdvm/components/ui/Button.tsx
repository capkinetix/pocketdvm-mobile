import { Pressable, Text, StyleSheet } from "react-native";
import {Colors, Spacing} from "../../constants/theme";

export default function PrimaryButton({ title, onPress }:any) {
    return (
        <Pressable style={styles.button}onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create ({
    button: {
        backgroundColor: Colors.secondary,
        padding: Spacing.md,
        borderRadius: 10,
        alignItems: "center",
    },
    text: {
        color: "#FFF",
        fontWeight: "600",
        fontSize: 16,
    },
});