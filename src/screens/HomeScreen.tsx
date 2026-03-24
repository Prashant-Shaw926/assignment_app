import React, { useState } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StatusBar,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList, Program } from '../types';
import { programs } from '../data/programs';
import ProgramCard from '../components/ProgramCard';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {

  const renderItem = ({ item }: ListRenderItemInfo<Program>) => (
    <ProgramCard
      program={item}
      onPress={() => navigation.navigate('Detail', { program: item })}
    />
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header */}
      <View className="px-4 pt-4 pb-4 bg-white">
        <Text className="text-2xl font-bold text-gray-900">Study Abroad</Text>
        <Text className="text-sm text-gray-400 mt-1">Find your perfect university</Text>
      </View>

      {/* Divider */}
      <View className="h-px bg-gray-100" />

      {/* List */}
      <FlatList
        data={programs}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        contentContainerStyle={{ paddingTop: 12, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View className="items-center mt-20">
            <Text className="text-gray-400 text-sm">No results found</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;