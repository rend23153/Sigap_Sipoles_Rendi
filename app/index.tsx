import { View, Text, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Image, Platform } from 'react-native';
import { FlatList, TouchableOpacity, GestureHandlerRootView } from 'react-native-gesture-handler';
import { useColorScheme } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { images } from '@constants/images';
import { Link } from 'expo-router';


const UploadPaymentScreen = () => {  
  const colorScheme = useColorScheme(); // Get the current color scheme

  const backgroundColor = colorScheme === 'dark' ? '#161719' : '#FFFFFF';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor }}>
    <View className="flex-1 items-center justify-center">
    <Link href="/admin" asChild>
          <Pressable>
          <Text className="text-3xl">Admin</Text>
          </Pressable>
        </Link>
        <Link href="/employee" asChild>
          <Pressable>
          <Text className="text-3xl">Employee</Text>
          </Pressable>
        </Link>
        <Text className="text-3xl">Driver</Text>
    </View>
    </SafeAreaView>
  )
}

export default UploadPaymentScreen



