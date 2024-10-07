import { View, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Image, Platform } from 'react-native';
import { FlatList, TouchableOpacity, GestureHandlerRootView } from 'react-native-gesture-handler';
import { useColorScheme } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { images } from '@constants/images';


const GenerateQrScreen = () => {  
  const colorScheme = useColorScheme(); // Get the current color scheme

  const backgroundColor = colorScheme === 'dark' ? '#161719' : '#FFFFFF';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor }}>
    <View className="flex-1 items-center justify-center">
        <Text className="text-3xl">Aosra!</Text>

    </View>
    </SafeAreaView>
  )
}

export default GenerateQrScreen



