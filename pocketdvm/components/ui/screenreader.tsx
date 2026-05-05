import React, { useEffect, useState } from 'react';
import { Pressable, Text, AccessibilityInfo, StyleSheet, ActivityIndicator, View, TouchableOpacity } from 'react-native';

type Props = {
  label?: string;
  text: string;
};

export default function AccessibleButton({
  label,
  text
}: Props) {
  const handlePress = () => {
    AccessibilityInfo.announceForAccessibility(text);
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.button}
      accessibilityRole='button'
      accessibilityLabel={label || "Read content"}>
      <Text style={styles.text}>Read Button!</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: '#A0A0A0',
  },
  pressed: {
    opacity: 0.7,
  },
  content: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});