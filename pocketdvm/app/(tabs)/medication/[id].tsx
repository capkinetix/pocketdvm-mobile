import { Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Screen from "../../../components/ui/Screen";

export default function PetDetail() {
  const { id, name, species, usage, dosage, frequency  } = useLocalSearchParams<{
    id: string;
    name: string;
    species?: string;
    usage: string;
    dosage: string;
    frequency: string;
  }>();

  return (
    <Screen>
      <Text style={{ fontSize: 22, fontWeight: "700" }}>
        Medication Details
      </Text>

      <Text style={{ marginTop: 12 }}>
        Medicine ID: {id}
      </Text>
      <Text style={{ marginTop: 12 }}>
        Medicine name: {name}
      </Text>
      <Text style={{ marginTop: 12 }}>
        Medicine for Species: {species}
      </Text>
      <Text style={{ marginTop: 12 }}>
        Medication Use case: {usage}
      </Text>
      <Text style={{ marginTop: 12 }}>
        Medication dosage: {dosage}
      </Text>
      <Text style={{ marginTop: 12 }}>
        Recommended Frequency: {frequency}
      </Text>    
    </Screen>
  );
}