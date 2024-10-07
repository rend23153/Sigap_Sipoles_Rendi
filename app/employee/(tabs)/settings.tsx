import { View, Text, Switch } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Image, Platform } from 'react-native';
import { FlatList, TouchableOpacity, GestureHandlerRootView } from 'react-native-gesture-handler';
import { useColorScheme } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { images } from '@constants/images';
import { Colors } from '@/constants/Colors';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';


const SettingsScreen = () => {  
  const colorScheme = useColorScheme(); // Get the current color scheme
  const cardBackgroundColor = colorScheme === 'dark' ? '#1C1C1E' : '#fff'; // Card background color for dark mode

  const backgroundColor = colorScheme === 'dark' ? '#161719' : '#FFFFFF';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor }}>
      <View className="px-5 my-6  space-y-6  " >
        <View>
            <ThemedText className="text-3xl font-osemibold">
              Settings
            </ThemedText>
        </View>

        <View>
            <ThemedText className="text-2xl font-omedium">
              Preferences
            </ThemedText>
            <View className="flex-row my-2  rounded-3xl shadow-sm shadow-grey elevation-3 px-5 py-3" style={[{ backgroundColor: cardBackgroundColor }]}>
              <TabBarIcon name={'contrast'} color={'#23ACE3'} />
              <View className='flex-1 justify-between flex-row'>
                <ThemedText className=" mx-3 my-1 text-xl font-oregular">
                  Dark Mode
                </ThemedText>
                <Switch>
                  
                </Switch>
              </View>
              
            </View>
        </View>

        <View>
            <ThemedText className="text-2xl font-omedium">
              Notification
            </ThemedText>
            <View className="flex-row my-2 rounded-3xl shadow-sm shadow-grey elevation-3 px-5 py-3" style={[{ backgroundColor: cardBackgroundColor }]}>
              <TabBarIcon name={'notifications-outline'} color={'#23ACE3'} />
              <View className='flex-1 justify-between flex-row'>
                <ThemedText className=" mx-3 my-1 text-xl font-oregular">
                  Push Notification
                </ThemedText>
                <Switch>
                  
                </Switch>
              </View>
              
            </View>
        </View>

        
      </View>
    </SafeAreaView>
    
  )
}

export default SettingsScreen


