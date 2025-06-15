import { Drawer } from 'expo-router/drawer';
import { View } from 'react-native';
import CustomDrawerContent from '@/components/drawer/DrawerMenu';

export default function MainLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Drawer
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="index" options={{ title: 'Trang chủ' }} />
        <Drawer.Screen name="new" options={{ title: 'Topic Base Lecture' }} />
      </Drawer>
    </View>
  );
}
