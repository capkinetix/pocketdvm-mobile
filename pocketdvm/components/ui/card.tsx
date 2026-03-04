import { View, StyleSheet } from "react-native";
import { Colors, Spacing } from "../../constants/theme"

export default function Card({children}:any) {
    return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.card,
        padding: Spacing.md,
        borderRadius: 12,
        marginBottom: Spacing.md,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 5,
        elevation: 2,
    },
});