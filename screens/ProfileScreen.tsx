import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Ingen profil (ennå!)</Text>
        <Text style={styles.subtitle}>
          Registrer din bruker når du får din første hårklipper via kartet.
        </Text>
      </View>

      <View style={styles.menuContainer}>
        <View style={styles.menuItem}>
          <FontAwesome name="question-circle" size={20} color="white" />
          <Text style={styles.menuText}>Hjelp & støtte</Text>
        </View>
        <View style={styles.line} />

        <View style={styles.menuItem}>
          <FontAwesome name="smile-o" size={20} color="white" />
          <Text style={styles.menuText}>Kontakt oss</Text>
        </View>
        <View style={styles.line} />

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Logg inn</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0a0a0a', // Almost black
      paddingHorizontal: 20,
    },
    content: {
      flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.select({ ios: 40, android: 20 }),
    },
    title: {
      fontSize: 24,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 12,
      lineHeight: 28,
    },
    subtitle: {
      fontSize: 14,
      color: 'white',
      textAlign: 'center',
      lineHeight: 20,
      
    },
    menuContainer: {
      paddingBottom: Platform.select({ ios: 60, android: 40 }),
    },
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16,
    },
    menuText: {
      color: 'white',
      fontSize: 16,
      marginLeft: 10,
      lineHeight: 22,
    },
    line: {
      height: 1,
      backgroundColor: '#333',
    },
    loginButton: {
      backgroundColor: '#FFD700', // Yellow
      paddingVertical: 14,
      borderRadius: 20,
      alignItems: 'center',
      marginTop: 20,
    },
    loginText: {
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
  

