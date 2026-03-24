import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Program } from '../types';

interface ProgramCardProps {
  program: Program;
  onPress: () => void;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="bg-white mx-4 mb-3 rounded-xl p-4 flex-row items-center border border-gray-300"
    >
      {/* Flag */}
      <View className="w-12 h-12 rounded-lg bg-gray-100 items-center justify-center mr-3">
        <Text className="text-2xl">{program.flag}</Text>
      </View>

      {/* Info */}
      <View className="flex-1 mr-2">
        <Text className="text-xs font-semibold text-gray-400 uppercase mb-1">
          {program.country}
        </Text>
        <Text numberOfLines={1} className="text-sm font-bold text-gray-900 mb-1">
          {program.university}
        </Text>
        <Text numberOfLines={2} className="text-xs text-gray-500">
          {program.description}
        </Text>
      </View>

      {/* Chevron */}
      <Text className="text-gray-300 text-xl">›</Text>
    </TouchableOpacity>
  );
};

export default ProgramCard;