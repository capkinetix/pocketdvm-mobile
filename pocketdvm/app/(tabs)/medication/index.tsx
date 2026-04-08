import { FlatList, Text, StyleSheet, Pressable } from "react-native";
import Screen from "../../../components/ui/Screen";
import Card from "../../../components/ui/card";
import { Colors, Spacing } from "../../../constants/theme";
import { useRouter } from "expo-router";

type medExamples = {
  id: number;
  name: string;
  species: string;
  usage: string;
  dosage: string;
  frequency: string;
};
const data: medExamples[] = [
  {id: 1, name: "Amoxicillin", species: "both", usage: "Bacterial infections", dosage: "5-10 mg/kg", frequency: "Every 12 hours"},
  {id: 2, name: "Carprofen", species: "canine", usage: "Pain and inflammation (NSAID)", dosage: "2.2 mg/kg", frequency: "Every 12 hours"},
  {id: 3, name: "Prednisolone", species: "both", usage: "Allergies and inflammation", dosage: "0.5-1 mg/kg", frequency: "Once daily"},
  {id: 4, name: "Metronidazole", species: "both", usage: "GI infections / diarrhea", dosage: "10-15 mg/kg", frequency: "Every 12 hours"},
  {id: 5, name: "Gabapentin", species: "both", usage: "Pain management / anxiety", dosage: "5-10 mg/kg", frequency: "Every 8-12 hours"},
  {id: 6, name: "Enrofloxacin", species: "both", usage: "Broad-spectrum antibiotic", dosage: "5 mg/kg", frequency: "Once daily"},
  {id: 7, name: "Meloxicam", species: "feline", usage: "Pain relief (NSAID)", dosage: "0.05 mg/kg", frequency: "Once daily"},
  {id: 8, name: "Clindamycin", species: "both", usage: "Dental infections", dosage: "5.5 mg/kg", frequency: "Every 12 hours"}
];

const router = useRouter();

export default function Medications() {
    return (
        <Screen>
            <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <Pressable 
                    onPress={() => {
                        router.push({
                        pathname: "/medication/[id]",
                        params: {
                            id: item.id,
                            name: item.name,
                            species: item.species,
                            usage: item.usage,
                            dosage: item.dosage,
                            frequency: item.frequency

                        },
                    });
                }}>
            
                    <Card>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.species}>{item.usage}</Text>
                    </Card>
                </Pressable>
            )}
            />
        </Screen>
    )
}


const styles = StyleSheet.create({
    name: {
        fontSize: 18,
        fontWeight: "600"
    },
    species: {
        color: Colors.textSecondary,
    },
});