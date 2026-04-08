import { FlatList, Text, StyleSheet, Pressable } from "react-native";
import Screen from "../../../components/ui/Screen";
import Card from "../../../components/ui/card";
import { Colors, Spacing } from "../../../constants/theme";
import { useRouter } from "expo-router";

type Appointment = {
  id: number;
  petName: string;
  species: "canine" | "feline";
  breed: string;
  owner: string;
  date: string;
  time: string;
  reason: string;
  status: "scheduled" | "completed" | "cancelled";
};

export const data: Appointment[] = [
  {id: 1, petName: "Buddy", species: "canine", breed: "Golden Retriever", owner: "Sarah Johnson", date: "2026-04-10", time: "09:00 AM", reason: "Annual wellness exam", status: "scheduled"},
  {id: 2, petName: "Whiskers", species: "feline", breed: "Domestic Shorthair", owner: "Mike Chen", date: "2026-04-10", time: "10:30 AM", reason: "Vomiting / GI issue", status: "scheduled"},
  {id: 3, petName: "Max", species: "canine", breed: "German Shepherd", owner: "Emily Davis", date: "2026-04-09", time: "01:00 PM", reason: "Limping / possible injury", status: "completed"},
  {id: 4, petName: "Luna", species: "feline", breed: "Siamese", owner: "James Wilson", date: "2026-04-11", time: "11:15 AM", reason: "Vaccinations", status: "scheduled"},
  {id: 5, petName: "Rocky", species: "canine", breed: "Bulldog", owner: "Ashley Martinez", date: "2026-04-08", time: "03:45 PM", reason: "Skin allergies", status: "completed"},
  {id: 6, petName: "Mittens", species: "feline", breed: "Maine Coon", owner: "David Brown", date: "2026-04-12", time: "02:00 PM", reason: "Dental cleaning", status: "scheduled"},
  {id: 7, petName: "Charlie", species: "canine", breed: "Beagle", owner: "Laura Green", date: "2026-04-07", time: "12:30 PM", reason: "Ear infection", status: "completed"},
  {id: 8, petName: "Shadow", species: "feline", breed: "Persian", owner: "Chris Taylor", date: "2026-04-13", time: "09:45 AM", reason: "Eye discharge", status: "scheduled"}
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
                        pathname: "/appointments/[id]",
                        params: {
                            id: item.id,
                            petName: item.petName,
                            species: item.species,
                            breed: item.breed,
                            owner: item.owner,
                            date: item.date,
                            time: item.time,
                            reason: item.reason,
                            status: item.status
                        },
                    });
                }}>
            
                    <Card>
                        <Text style={styles.name}>{item.date}</Text>
                        <Text style={styles.name}>{item.status}</Text>
                        <Text style={styles.species}>{item.time}</Text>
                        <Text style={styles.species}>{item.petName}</Text>
                        <Text style={styles.species}>{item.reason}</Text>
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

