import React from 'react';
import { Image, Text, View } from 'react-native';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View className="items-center pb-8 pt-12">
      <Text className="text-lg font-bold text-gray-800">{title}</Text>
      {/* Replace 'path_to_jane_image' with your actual image path */}
      <Image
        source={{ uri: 'path_to_jane_image' }}
        className="w-30 mt-4 h-40 rounded-full"
      />
    </View>
  );
};

export default Header;
