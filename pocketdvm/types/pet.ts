export type Pet = {
    id: string;
    name: string;
    species: "Canis Familiaris" | "Felis Catus" | "Exotic";
    breed?: string;
    sex: "Male" | "Female";
};