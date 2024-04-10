import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

const App = () => {
  return (
    <View style={{
      flex: 1,
      padding: 10,
      
    }}>
      <TextInput
        style={myStyle.TextInput}
        value="Email"
      />

      <TextInput
        style={{
          borderWidth: 2,
          margin: 5,
          fontSize: 15
        }}
        value="Password"
      />
      <TouchableOpacity
        style={{backgroudColor: "yellow",
        height: 50,
        bodeRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        margin: 10}}>
        <Text >Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App();

const myStyle = StyleSheet.create(
  {
    container: {
      flex: 1,
      padding: 10,
      
    },
    TextInput: {
      borderWidth: 2,
      margin: 5,
      fontSize: 15
    },
    button: {
      backgroudColor: "yellow",
      height: 50,
      bodeRadius: 20,
      justifyContent: "center",
      alignItems: "center",
      margin: 10
    },
    textButton: {
      fontSize: 20,
      fontWeight: "bold"
    }
  })
