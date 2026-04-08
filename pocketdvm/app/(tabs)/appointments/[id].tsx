import { Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Screen from "../../../components/ui/Screen";

export default function PetDetail() {
  const { id, petName, species, breed, owner, date, time, reason, status } = useLocalSearchParams<{
    id: string;
    petName: string;
    species: "canine" | "feline";
    breed?: string;
    owner: string;
    date: string;
    time: string;
    reason: string;
    status: "scheduled" | "completed" | "cancelled";

  }>();

  return (
    <Screen>
      <Text style={{ fontSize: 22, fontWeight: "700" }}>
        Appointment Information
      </Text>

      <Text style={{ marginTop: 12 }}>
        Appointment ID: {id}
      </Text>
      <Text style={{ marginTop: 12 }}>
        Patient Name: {petName}
      </Text>
      <Text style={{ marginTop: 12 }}>
        Patient Species: {species}
      </Text>
      <Text style={{ marginTop: 12 }}>
        Patient Breed: {breed}
      </Text>
      <Text style={{ marginTop: 12 }}>
        Owner: {owner}
      </Text>
      <Text style={{ marginTop: 12 }}>
        Date: {date}
        Time: {time}
      </Text>
      <Text style={{ marginTop: 12 }}>
        Reason for visiting: {reason}
      </Text>
      <Text style={{ marginTop: 12 }}>
        Status: {status}
      </Text>
    </Screen>
  );
}