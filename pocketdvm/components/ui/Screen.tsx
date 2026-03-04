import { SafeAreaView, StyleSheet, View } from "react-native";
import { Colors, Spacing } from "../../constants/theme"

export default function Screen({ children }:any) {
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.container}>{children}</View>
        </SafeAreaView> 
    );
};

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    container: {
        flex: 1,
        padding: Spacing.md,
    },
});