import { FlatList, Text, StyleSheet, Pressable } from "react-native";
import Screen from "../../../components/ui/Screen";
import Card from "../../../components/ui/card";
import { Colors, Spacing } from "../../../constants/theme";
import { useRouter } from "expo-router";

const petexamples = [
    { id: "1", name: "Rover", species: "Canis Familiaris", breed: "Golden Retriever", sex: "Male"},
    { id: "2", name: "Tiger", species: "Felis Catus", breed: "Calico ASH", sex: "Female"},
];

const router = useRouter();

export default function Pets() {
    return (
        <Screen>
            <FlatList
            data={petexamples}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Pressable 
                    onPress={() => {
                        router.push({
                        pathname: "/pets/[id]",
                        params: {
                            id: item.id,
                            species: item.species,
                            breed: item.breed,
                            sex: item.sex,
                        },
                    });
                }}>
            
                    <Card>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.species}>{item.species}</Text>
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