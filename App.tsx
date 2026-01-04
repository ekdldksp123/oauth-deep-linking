
import 'react-native-url-polyfill/auto'

import Auth from './components/Auth'
import { View, Text, StyleSheet, StatusBar } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome, please sign in!</Text>
      <Auth />
      <StatusBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
