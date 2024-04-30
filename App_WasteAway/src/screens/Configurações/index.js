import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function Config() {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <ConfigCard title="Configurações do Aplicativo">
          <ColumnFunction title="Gerenciar Notificações" onPress={() => handlePress('Gerenciar Notificações')} />
          <ColumnFunction title="Segurança e Proteção" onPress={() => handlePress('Segurança')} />
          <ColumnFunction title="Central de Ajuda" onPress={() => handlePress('Central de Ajuda')} />
          <ColumnFunction title="Versão do Aplicativo" onPress={() => handlePress('Versão')} />
          <ColumnFunction title="Sobre o WasteAway" onPress={() => handlePress('Sobre o WasteAway')} />
        </ConfigCard>
      </View>
    </View>
  );
}

function ConfigCard({ title, children }) {
  return (
    <View style={[styles.card, { backgroundColor: '#ffffff' }]}>
      <Text style={[styles.title, { color: '#44436C' }]}>{title}</Text>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

function ColumnFunction({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.column}>
      <Text style={[styles.functionText, { color: '#ffffff', fontWeight: 'bold' }]}>{title}</Text>
      <Text style={[styles.functionText, { color: '#ffffff', fontWeight: 'bold' }]}> {">"}</Text>
    </TouchableOpacity>
  );
}

function handlePress(functionName) {
  console.log(`Função "${functionName}" clicada`);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  cardContainer: {
    width: '100%',
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#44436C',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {},
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    backgroundColor: '#44436C',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  functionText: {
    fontSize: 18,
  },
});

export default Config;
