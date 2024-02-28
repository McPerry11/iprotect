import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Page() {
  return (
    <View style={styles.border}>
      <StatusBar style='auto' animated/>

      <Link href='/login' push>
        <Pressable>
          <Text>Hello World</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderColor: 'red',
  }
});