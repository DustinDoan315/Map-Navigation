import {icons} from '@assets/index';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';

const HomeScreen = () => {
  const LOCATION_ONE = {
    latitude: 10.762622,
    longitude: 106.660172,
  };

  const LOCATION_TWO = {
    latitude: 10.776885,
    longitude: 106.695057,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: (LOCATION_ONE.latitude + LOCATION_TWO.latitude) / 2,
          longitude: (LOCATION_ONE.longitude + LOCATION_TWO.longitude) / 2,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}>
        {/* Markers for the two locations */}
        <Marker
          icon={icons.avatar_2}
          coordinate={LOCATION_ONE}
          title="Location 1"
        />
        <Marker
          icon={icons.avatar_2}
          coordinate={LOCATION_TWO}
          title="Location 2"
        />

        {/* Polyline connecting the markers */}
        <Polyline
          coordinates={[LOCATION_ONE, LOCATION_TWO]}
          strokeColor="#FF0000"
          strokeWidth={3}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default HomeScreen;
