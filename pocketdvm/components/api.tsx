import React, { JSX, useEffect, useState } from 'react';
import { ActivityIndicator, Button, Image, StyleSheet, View } from "react-native";

type apicat = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export default function CatImage(): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCat = async (): Promise<void> => {
    try {
      setLoading(true);

      const response = await fetch("https://api.thecatapi.com/v1/images/search");
      const data: apicat[] = await response.json();

      setImageUrl(data[0].url);
    } catch (error) {
      console.error("Error fetching cat:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      {imageUrl && (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      )}
      <Button title="Get New Cat" onPress={fetchCat} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
});