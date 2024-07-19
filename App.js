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
      //   SafeAreaView para garantir que a UI esteja dentro da área segura do dispositivo.

      <SafeAreaView style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.inputText}>{input}</Text>
          <Text style={styles.resultText}>{result}</Text>
        </View>

        {/* Contêiner para os botões */}
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
    flex: 1, // Ocupa todo o espaço disponível.
    width: '100vw', // Define a largura como 100% da viewport.
    justifyContent: 'center', 
    maxWidth: 600, // Define uma largura máxima que o container com todos os botões e display pode ter.
    margin: 'auto', // Centraliza horizontalmente para deixar mais responsivo em diferences dispositivos.
    backgroundColor: '#9cc4e4' 
  },
  resultContainer: {
    flex: 2, // Ocupa 2/7 do espaço disponível.
    justifyContent: 'center', 
    alignItems: 'flex-end', 
    padding: 20, 
  },
  inputText: {
    fontSize: height < 600 ? 36 : height * 0.06, // Define o tamanho da fonte com base na altura da janela.
    color: '#000', 
  },
  resultText: {
    fontSize: height < 600 ? 48 : height * 0.07, // Define o tamanho da fonte com base na altura da janela.
    color: '#000', 
  },
  buttonsContainer: {
    flex: 5, // Ocupa 5/7 do espaço disponível.
    flexDirection: 'row', 
    flexWrap: 'wrap', // Permite que os itens quebrem linha.
    justifyContent: 'flex-end', 
    borderTopWidth: 4, // Define a largura da borda superior.
    borderTopColor: '#0fc3e8', // Define a cor da borda superior.
  },
  button: {
    width: '25%', // Define a largura dos botões para deixar em 4 colunas
    height: '25%', // Define a altura dos botões para deixar em 4 linhas
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
  },
  buttonText: {
    fontSize: height < 600 ? 24 : height * 0.04, // Define o tamanho da fonte com base na altura da janela.
    color: '#fff', 
  },
  nonNumericButtonText: {
    color: '#0fc3e8', 
  },
});

export default App;
