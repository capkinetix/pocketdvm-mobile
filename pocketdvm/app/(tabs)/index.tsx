import { Text, StyleSheet } from "react-native";
import Screen from "../../components/ui/Screen";
import Card from "../../components/ui/card";
import PrimaryButton from "../../components/ui/Button";
import { Colors, Spacing } from "../../constants/theme";
import { useRouter } from "expo-router"

const router= useRouter();



export default function Home() {
  return (
    
    <Screen>
      <Text style={styles.header}>PocketDVM Portal</Text>

      <Card>
        <Text style={styles.cardTitle}>
          Pet Profile
        </Text>
        <PrimaryButton
            title="View"
            onPress={() => router.push("/pets")}
            />
      </Card>
      <Card>
        <Text style={styles.cardTitle}>
          Pet Medication
        </Text>
        <PrimaryButton
            title="View"
            onPress={() => router.push("/medication")}
            />
      </Card>
      <Card>
        <Text style={styles.cardTitle}>
          Upcoming Appointments
        </Text>
        <PrimaryButton
            title="View"
            onPress={() => router.push("/appointments")}
            />
      </Card>
      <Card>
        <Text style={styles.cardTitle}>
          Fun API
        </Text>
        <PrimaryButton
            title="View"
            onPress={() => router.push("/api")}
            />
      </Card>
    </Screen>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: Spacing.sm,
    color: Colors.text,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: Spacing.sm,
  },
  cardText: {
    color: Colors.textSecondary,
    marginBottom: 4,
  }
})