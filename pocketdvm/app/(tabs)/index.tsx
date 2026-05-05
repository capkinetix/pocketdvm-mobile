import { Text, StyleSheet } from "react-native";
import Screen from "../../components/ui/Screen";
import Card from "../../components/ui/card";
import PrimaryButton from "../../components/ui/Button";
import { Colors, Spacing } from "../../constants/theme";
import { useRouter } from "expo-router"
import AccessibleButton from "@/components/ui/screenreader"


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
            title="Go to Pet Profiles"
            onPress={() => router.push("/pets")}
            />
        <AccessibleButton text='Go to the Pet Profiles Panel' />
      </Card>
      <Card>
        <Text style={styles.cardTitle}>
          Pet Medication
        </Text>
        <PrimaryButton
            title="Go to the Medication Panel"
            onPress={() => router.push("/medication")}
            />
            <AccessibleButton text='Go to the Medication Panel' />
      </Card>
      <Card>
        <Text style={styles.cardTitle}>
          Upcoming Appointments
        </Text>
        <PrimaryButton
            title="See all appointments"
            onPress={() => router.push("/appointments")}
            />
        <AccessibleButton text='Go to the Appointments Panel' />
      </Card>
      <Card>
        <Text style={styles.cardTitle}>
          Fun API
        </Text>
        <PrimaryButton
            title="Go to the API page"
            onPress={() => router.push("/api")}
            />
        <AccessibleButton text='Go to the API' />
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