import { useLocalSearchParams } from 'expo-router'; // Correct import
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

const DetailOrderScreen = () => {
  // Use useLocalSearchParams to get the route params
  const { id, name, status } = useLocalSearchParams();

  // Handle the case where the parameters are missing
  if (!id || !name || !status) {
    return (
      <View style={styles.container}>
        <ThemedText className="font-osemibold text-xl">Error: Missing order details</ThemedText>
      </View>
    );
  }

  const statusSteps = getStatusSteps(status);  // Determine status steps based on status

  return (
    <View style={styles.container}>
      {/* Order Header */}
      <View style={styles.orderHeader}>
        <View style={styles.statusIndicator} />
        <View>
          <ThemedText className="font-osemibold text-2xl">{name}</ThemedText>
          <ThemedText className="font-oregular text-sm">Due to {getDueDate(status)}</ThemedText>
        </View>
      </View>

      {/* Status Timeline */}
      <View style={styles.timeline}>
        {statusSteps.map((step, index) => (
          <View key={index} style={styles.timelineStep}>
            <Image source={step.icon} style={styles.icon} />
            <View>
              <ThemedText className="font-omedium text-sm">{step.label}</ThemedText>
              <ThemedText className="font-oregular text-xs">{step.date}</ThemedText>
            </View>
          </View>
        ))}
      </View>

      {/* Check Payment Button */}
      <TouchableOpacity style={styles.paymentButton}>
        <ThemedText className="font-osemibold text-white text-center">Check Payment Status</ThemedText>
      </TouchableOpacity>
    </View>
  );
};

export default DetailOrderScreen;

// Helper functions to generate the timeline and due date
const getStatusSteps = (status) => {
  const steps = [
    {
      label: 'Order Received',
      date: '11:30, 24/09/2024',
      icon: require('../../assets/images/order-received.png'),
    },
  ];

  if (status === 'On-Going' || status === 'Completed') {
    steps.push(
      {
        label: 'Departure',
        date: '23:30, 23/09/2024',
        icon: require('../../assets/images/departure.png'),
      },
      {
        label: 'Order Has Arrived',
        date: '07:30, 24/09/2024',
        icon: require('../../assets/images/arrived.png'),
      }
    );
  }

  if (status === 'Completed') {
    steps.push({
      label: 'Completed Installation',
      date: '11:30, 24/09/2024',
      icon: require('../../assets/images/completed.png'),
    });
  }

  return steps;
};

const getDueDate = (status) => {
  switch (status) {
    case 'Completed':
      return '24 September 2024';
    case 'On-Going':
      return '23 September 2024';
    default:
      return '22 September 2024';
  }
};

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  orderHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  statusIndicator: {
    width: 5,
    height: 50,
    backgroundColor: '#00ADEF',
    borderRadius: 10,
    marginRight: 10,
  },
  timeline: {
    flexDirection: 'column',
    paddingLeft: 20,
    marginVertical: 10,
  },
  timelineStep: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  paymentButton: {
    backgroundColor: '#00ADEF',
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 20,
  },
});
