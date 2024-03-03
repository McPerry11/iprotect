import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Page() {
  return (
    // Dashboard Layout
    <View style={[styles.dashboard, styles.border]}>
      {/* Temporary link to login page */}
      <Link href='/login'>
        <Pressable>
          <Text>Log out</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
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
    flex: 1,    
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