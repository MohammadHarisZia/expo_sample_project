import { router } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { Placeholder } from '@/ui/icons/placeholder';

interface TrainingCardProps {
  lessonName: string;
  minutes: number;
  time: string;
  id: string;
}

export const TrainingCard: React.FC<TrainingCardProps> = ({
  lessonName,
  minutes,
  time,
  id,
}) => {
  const handlePress = () => {
    const isFirstTraining = true;
    const path = isFirstTraining
      ? '/training/(sin)/intro'
      : `/training/(sin)/[id]`;

    router.push({
      pathname: path,
      params: { id },
    });
  };

  return (
    <Pressable
      className="flex h-28 w-[98%] flex-row items-center justify-start  gap-8 rounded-xl bg-slate-400 dark:bg-slate-200"
      onPress={handlePress}
    >
      <View className="flex h-28 w-[98%] flex-row items-center justify-between rounded-xl bg-slate-400 dark:bg-slate-200">
        <View className="flex-row items-center justify-start ">
          <View className=" size-20 mx-5 flex items-center justify-center rounded-xl  bg-slate-300 p-3">
            <Placeholder color={'#1A202C'} />
          </View>
          <Text className="text-md w-32 font-bold    dark:text-black">
            {lessonName}
          </Text>
        </View>

        <View className=" mr-5  flex items-center justify-center rounded-xl ">
          <Text className="text-3xl font-bold dark:text-black">{minutes}</Text>
          <Text className="text-lg  dark:text-black">{time}</Text>
        </View>
      </View>
    </Pressable>
  );
};
