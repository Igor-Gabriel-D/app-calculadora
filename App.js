import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';
const { height } = Dimensions.get('window');

const App = () => {
  const input = useState('');
  const result = useState('');

  return (
    
      <SafeAreaView style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.inputText}>{input}</Text>
          <Text style={styles.resultText}>{result}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
              key={'7'}
              style={styles.button}
              
            >
              <Text style={styles.buttonText}>{'7'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
              key={'8'}
              style={styles.button}
              
            >
              <Text style={styles.buttonText}>{'8'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
              key={'9'}
              style={styles.button}
              
            >
              <Text style={styles.buttonText}>{'9'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
              key={'/'}
              style={styles.button}
              
            >
              <Text style={[styles.buttonText, styles.nonNumericButtonText]}>{'/'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
              key={'4'}
              style={styles.button}
              
            >
              <Text style={styles.buttonText}>{'4'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
              key={'5'}
              style={styles.button}
              
            >
              <Text style={styles.buttonText}>{'5'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
              key={'6'}
              style={styles.button}
              
            >
              <Text style={styles.buttonText}>{'6'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
              key={'*'}
              style={styles.button}
              
            >
              <Text style={[styles.buttonText, styles.nonNumericButtonText]}>{'*'}</Text>
          </TouchableOpacity>


          <TouchableOpacity
              key={'1'}
              style={styles.button}
              
            >
              <Text style={styles.buttonText}>{'1'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
              key={'2'}
              style={styles.button}
              
            >
              <Text style={styles.buttonText}>{'2'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
              key={'3'}
              style={styles.button}
              
            >
              <Text style={styles.buttonText}>{'3'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
              key={'-'}
              style={styles.button}
              
            >
              <Text style={[styles.buttonText, styles.nonNumericButtonText]}>{'-'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
              key={'C'}
              style={styles.button}
              
            >
              <Text style={[styles.buttonText, styles.nonNumericButtonText]}>{'C'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
              key={'0'}
              style={styles.button}
              
            >
              <Text style={styles.buttonText}>{'0'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
              key={'='}
              style={styles.button}
              
            >
              <Text style={[styles.buttonText, styles.nonNumericButtonText]}>{'='}</Text>
          </TouchableOpacity>
          <TouchableOpacity
              key={'+'}
              style={styles.button}
              
            >
              <Text style={[styles.buttonText, styles.nonNumericButtonText]}>{'+'}</Text>
          </TouchableOpacity>
          
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: '100vw',
    justifyContent: 'center',
    maxWidth: 600,
    margin: 'auto',

    backgroundColor: '#9cc4e4'
  },
  resultContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
  },
  inputText: {
    fontSize: height < 600 ? 36 : height * 0.06,
    color: '#000',
  },
  resultText: {
    fontSize: height < 600 ? 48 : height * 0.07,
    color: '#000',
  },
  buttonsContainer: {
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'end',
    borderTopWidth: 4,
    borderTopColor: '#0fc3e8',
  },
  button: {
    width: '25%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#f0f0f0',
    backgroundColor: '#487aa1'
  },
  buttonText: {
    fontSize: height < 600 ? 24 : height * 0.04,
    color: '#fff',
  },
  nonNumericButtonText: {
    color: '#0fc3e8',
  },
});

export default App;
