import { Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Screen from "../../../components/ui/Screen";

export default function PetDetail() {
  const { id, species, breed, sex } = useLocalSearchParams<{
    id: string;
    species?: string;
    breed?: string;
    sex?: string;
  }>();

  return (
    <Screen>
      <Text style={{ fontSize: 22, fontWeight: "700" }}>
        Pet Detail
      </Text>

      <Text style={{ marginTop: 12 }}>
        Pet ID: {id}
      </Text>
      <Text style={{ marginTop: 12 }}>
        Pet Species: {species}
      </Text>
      <Text style={{ marginTop: 12 }}>
        Pet Breed: {breed}
      </Text>
      <Text style={{ marginTop: 12 }}>
        Pet Sex: {sex}
      </Text>    
    </Screen>
  );
}