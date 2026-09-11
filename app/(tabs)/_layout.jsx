import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{
      
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="scan"
        options={{
          title: 'Scan',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="qrcode" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;