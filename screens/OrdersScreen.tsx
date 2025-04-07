import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OrdersScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.header}>Dine bestillinger</Text>

      <View style={styles.content}>
        <View style={styles.circle}>
          <Image
            source={require('../assets/images/cutters.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.noOrderTitle}>Ingen klipp?</Text>
        <Text style={styles.description}>
          Du har ikke bestilt noen hårklipp ennå. Velg en salong i kartet, betal og du vil bli satt i kø, med en fresh hårsveis på null komma svisj!
        </Text>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.salonButton}>
          <Text style={styles.salonText}>Velg salong</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OrdersScreen;

const { width } = Dimensions.get("window");
const circleSize = width * 0.6;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#0a0a0a",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    paddingTop: Platform.select({ ios: 20, android: 10 }),
    paddingBottom: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  circle: {
    width: circleSize,
    height: circleSize,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    overflow: "hidden",
  },
  image: {
    width: '90%',
    height: '90%',
  },
  noOrderTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 15,
  },
  description: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
    maxWidth: "90%",
  },
  bottomContainer: {
    paddingBottom: Platform.select({ ios: 60, android: 40 }),
  },
  salonButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: 'center',
  },
  salonText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
