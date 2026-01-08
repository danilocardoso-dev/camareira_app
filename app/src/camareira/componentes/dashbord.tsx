import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { globalStyles, titleStyles, textStyles, colors, utilityStyles } from '../../styles/styles';

interface Room {
  id: string;
  number: number;
  status: 'clean' | 'cleaning' | 'dirty';
}

const mockRooms: Room[] = [
  { id: '1', number: 101, status: 'clean' },
  { id: '2', number: 102, status: 'cleaning' },
  { id: '3', number: 103, status: 'dirty' },
  { id: '4', number: 104, status: 'clean' },
  { id: '5', number: 105, status: 'cleaning' },
  // Adicione mais quartos conforme necessário
];

const Dashboard: React.FC = () => {
  const cleanCount = mockRooms.filter(room => room.status === 'clean').length;
  const cleaningCount = mockRooms.filter(room => room.status === 'cleaning').length;
  const dirtyCount = mockRooms.filter(room => room.status === 'dirty').length;

  const getStatusText = (status: string) => {
    switch (status) {
      case 'clean': return 'Limpo';
      case 'cleaning': return 'Sendo limpo';
      case 'dirty': return 'Sujo';
      default: return '';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'clean': return colors.success;
      case 'cleaning': return colors.warning;
      case 'dirty': return colors.danger;
      default: return colors.text;
    }
  };

  const renderRoom = ({ item }: { item: Room }) => (
    <View style={[globalStyles.card, styles.roomCard]}>
      <Text style={titleStyles.subtitle}>Quarto {item.number}</Text>
      <Text style={[textStyles.text, { color: getStatusColor(item.status) }]}>
        Status: {getStatusText(item.status)}
      </Text>
    </View>
  );

  return (
    <View style={globalStyles.container}>
      <Text style={titleStyles.title}>Dashboard - Gestão de Camareiras</Text>

      <View style={styles.statsContainer}>
        <View style={[globalStyles.card, styles.statCard]}>
          <Text style={titleStyles.subtitle}>Quartos Limpos</Text>
          <Text style={[textStyles.text, styles.statNumber, { color: colors.success }]}>{cleanCount}</Text>
        </View>
        <View style={[globalStyles.card, styles.statCard]}>
          <Text style={titleStyles.subtitle}>Sendo Limpos</Text>
          <Text style={[textStyles.text, styles.statNumber, { color: colors.warning }]}>{cleaningCount}</Text>
        </View>
        <View style={[globalStyles.card, styles.statCard]}>
          <Text style={titleStyles.subtitle}>Quartos Sujos</Text>
          <Text style={[textStyles.text, styles.statNumber, { color: colors.danger }]}>{dirtyCount}</Text>
        </View>
      </View>

      <Text style={[titleStyles.subtitle, utilityStyles.mt4]}>Lista de Quartos</Text>
      <FlatList
        data={mockRooms}
        keyExtractor={(item) => item.id}
        renderItem={renderRoom}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  roomCard: {
    marginBottom: 10,
  },
});

export default Dashboard;