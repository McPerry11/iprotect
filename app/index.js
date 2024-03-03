import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function Page() {
  return (
    // App Layout
    <View style={[styles.border]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'dodgerblue'} animated/>

      {/* Navigation Bar */}
      <View style={[styles.navbar, styles.border]}>
        {/* Navigation Bar Header */}
        <View style={[styles.navbarHeader, styles.border]}>
          <Text style={styles.navbarTitle}>iProtect</Text>
        </View>

        {/* Burger Menu Button */}
        <View style={[styles.burgerMenu, styles.border]}>
          <Pressable>
            <Ionicons name='menu' size={30} color='white'/>
          </Pressable>
        </View>
      </View>

      {/* Dashboard Content */}
      <View style={[styles.dashboard, styles.border]}>

        {/* Temporary link to login page */}
        <Link href='/login'>
          <Pressable>
            <Text>Log out</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },

  // Border is only used for frontend styling and debugging
  border: {
    borderWidth: 1,
    borderColor: 'red',
  },

  burgerMenu: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
  },

  dashboard: {
    marginTop: 10,
  },

  navbar: {
    flexDirection: 'row',
    backgroundColor: 'dodgerblue',
    height: 50,
  },

  navbarHeader: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },

  navbarTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});