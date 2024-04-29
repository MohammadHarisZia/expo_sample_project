import React from 'react';
import { Text, View } from 'react-native';

interface IConfirmationStageProps {
  currentExercise: any | null;
  onNextExercise: () => void;
}

const ConfirmationStage: React.FC<IConfirmationStageProps> = ({}) => {
  return (
    <View className=" flex h-[90%] w-screen flex-col items-center justify-between pb-24">
      <Text>Confirmation Screen</Text>
    </View>
  );
};

export default ConfirmationStage;
