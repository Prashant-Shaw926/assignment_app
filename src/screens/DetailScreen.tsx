import React from 'react';
import {
  Alert,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

// Info row
interface InfoRowProps {
  label: string;
  value: string;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => (
  <View className="flex-row justify-between items-center py-3 border-b border-gray-100">
    <Text className="text-sm text-gray-400">{label}</Text>
    <Text className="text-sm font-semibold text-gray-800">{value}</Text>
  </View>
);

const DetailScreen: React.FC<Props> = ({ navigation, route }) => {
  const { program } = route.params;

  const tuitionDisplay =
    `${program.tuition.currency} $${program.tuition.amount.toLocaleString()}/${program.tuition.period}`;

  const handleApply = () => {
    Alert.alert(
      'Application Started',
      `You've expressed interest in ${program.university}. Our team will contact you shortly.`,
      [{ text: 'OK' }]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header */}
      <View className="px-4 pt-3 pb-4 border-b border-gray-100">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          className="mb-4"
        >
          <Text className="text-lg text-gray-500">‹ Back</Text>
        </TouchableOpacity>

        <View className="flex-row items-center">
          <View className="w-14 h-14 rounded-xl bg-gray-100 items-center justify-center mr-3">
            <Text style={{ fontSize: 30 }}>{program.flag}</Text>
          </View>
          <View className="flex-1">
            <Text className="text-base font-bold text-gray-900 leading-5">
              {program.university}
            </Text>
            <Text className="text-sm text-gray-400 mt-0.5">{program.country}</Text>
          </View>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Program Details */}
        <View className="px-4 mt-5">
          <Text className="text-xs font-semibold text-gray-400 uppercase mb-2">
            Program Details
          </Text>
          <View className="bg-white border border-gray-100 rounded-xl px-4">
            <InfoRow label="Tuition" value={tuitionDisplay} />
            <InfoRow label="Duration" value={program.duration} />
            <InfoRow label="Intake" value={program.intake.join(', ')} />
            <InfoRow label="Ranking" value={program.ranking} />
          </View>
        </View>

        {/* About */}
        <View className="px-4 mt-6">
          <Text className="text-xs font-semibold text-gray-400 uppercase mb-2">
            About
          </Text>
          <Text className="text-sm text-gray-600 leading-6">
            {program.fullDescription}
          </Text>
        </View>
      </ScrollView>

      {/* CTA */}
      <View className="absolute bottom-0 left-0 right-0 px-4 pb-8 pt-3 bg-white border-t border-gray-100">
        <TouchableOpacity
          onPress={handleApply}
          activeOpacity={0.85}
          className="bg-gray-900 rounded-xl py-4 items-center"
        >
          <Text className="text-white text-sm font-bold">Apply Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;