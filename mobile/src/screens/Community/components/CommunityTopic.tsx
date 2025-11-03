import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../../../components/Button/Button';
import { CommunityResponse } from '../../../interfaces/community';

interface Props {
  community: CommunityResponse;
  onEnterCommunity: (community: CommunityResponse) => void;
}

export function CommunityTopic({ community, onEnterCommunity }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{community.name}</Text>
      </View>

      <Button 
        label="Entrar na Comunidade" 
        onPress={() => onEnterCommunity(community)} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 22,
    padding: 20,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
  },
  levelText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});
