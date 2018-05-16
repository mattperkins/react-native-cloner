import Expo from 'expo' // add if this component is app entry point
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, World!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f33',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Expo.registerRootComponent(App) // add to whichever component you wish as the entry point to your app