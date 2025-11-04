// BaseScreen.tsx
import React, { ReactNode, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Navbar } from '../../components/Navbar/Navbar';
import { Header } from '../../components/Header/Header';
import { Drawer } from '../../components/Drawner/Drawner';
import { styles } from '../../styles/global';
import { signOutUser } from '../../auth/authentication';
import { makeNavigation } from '../../service/navigation.service';
import { View } from 'react-native';


type BaseProps = {
  children: ReactNode;
};

export const Base = ({ children }: BaseProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigation = makeNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Drawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onLogoff={() => { setDrawerOpen(false); signOutUser(navigation) }}
      />

      <Header
        onUserImagePress={() => navigation.navigate("Home")}
        onDrawnerPress={() => setDrawerOpen(true)}
      />

      <View style={{ flex: 1, paddingBottom: 80 }}>
        {children}
      </View>

      <Navbar />
    </SafeAreaView>
  );
};


