import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen name='index' options={{
        headerTitle: 'iProtect',
        headerStyle: {
          backgroundColor: 'dodgerblue',
        },
        title: 'Dashboard',
        tabBarIcon: ({color, size}) => (
          <Ionicons name='home' color={color} size={size}/>
        ),
      }}/>
    </Tabs>
  );
}