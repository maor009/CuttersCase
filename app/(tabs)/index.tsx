//Homescreen - Map over fetched salons

import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Callout, Marker, UrlTile } from "react-native-maps";
import { fetchSalons } from "../../services/api";
import { Salon } from "../../types/salon";
import { grayMapStyle } from "../../constants/mapStyles";

const MapScreen = () => {
  const [salons, setSalons] = useState<Salon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedSalon, setSelectedSalon] = useState<Salon | null>(null);

  //Fetching salons from the api
  useEffect(() => {
    const getSalons = async () => {
      try {
        const data = await fetchSalons();
        setSalons(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch salons:", error);
        setLoading(false);
      }
    };

    getSalons();
  }, []);

  //Loading screen
  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#fff101" />
      </View>
    );
  }

  //returning the map screen
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        customMapStyle={grayMapStyle}
        initialRegion={{
          latitude: 60.385654, // Bergen
          longitude: 5.318090,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {/* Map styling with UrlTile */}
        <UrlTile
          urlTemplate="https://a.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}{r}.png"
          maximumZ={19}
        />

        {/* Fake user location in Bergen */}
        <Marker
          coordinate={{ latitude: 60.3913, longitude: 5.3221 }}
          anchor={{ x: 0.5, y: 0.5 }}
        >
          <View style={styles.fakeUserMarkerOuter}>
            <View style={styles.fakeUserMarkerInner} />
          </View>
        </Marker>

        {/* Salon markers */}
        {salons.map((salon) => (
          <Marker
            key={salon.id}
            coordinate={{
              latitude: parseFloat(salon.coordinates.latitude),
              longitude: parseFloat(salon.coordinates.longitude),
            }}
            onPress={() => setSelectedSalon(salon)}
          >
            <View style={styles.customPin} />
            <Callout tooltip>
    {/* Empty callout to suppress default box */}
    <View />
  </Callout>
          </Marker>
        ))}
      </MapView>

      {/* Floating info card - when the user clicks on a salon */}
      {selectedSalon && (
        <View style={styles.infoCard}>
          <View>
            <Text style={styles.infoTitle}>{selectedSalon.name}</Text>
            <Text style={styles.infoAddress}>{selectedSalon.address}</Text>
            <Text style={styles.infoPlace}>{selectedSalon.postalPlace}</Text>
            <Text style={styles.infoCode}>{selectedSalon.postalCode}</Text>
            
          </View>
          <TouchableOpacity onPress={() => setSelectedSalon(null)}>
            <Text style={styles.closeButton}>✕</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

//Styling
const styles = StyleSheet.create({
  container: { flex: 1 },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: { flex: 1 },
  customPin: {
    width: 15,
    height: 15,
    borderRadius: 5,
    backgroundColor: "#ffdd00",
  },
  fakeUserMarkerOuter: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(0, 122, 255, 0.3)", 
    justifyContent: "center",
    alignItems: "center",
  },
  fakeUserMarkerInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#007AFF", 
  },
  infoCard: {
    position: "absolute",
    bottom: 90,
    left: 20,
    right: 20,
    backgroundColor: "#333333",
    borderRadius: 12,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  infoTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
    color: "#fff101",
  },
  infoAddress: {
    fontSize: 14,
    color: "#fff",
  },
  infoPlace: {
    fontSize: 14,
    color: "#fff",
  },
  infoCode: {
    fontSize: 14,
    color: "#fff",
  },
  closeButton: {
    fontSize: 18,
    color: "#fff101",
    paddingLeft: 15,
  },
});

export default MapScreen;
