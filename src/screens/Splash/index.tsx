import { Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';

import { SplashScreenProps } from '../../types';
import { IconLogo } from '../../assets';
import { styles } from './styles';
import { useSplash } from './useSplash';

const Splash: React.FC<SplashScreenProps> = props => {
  const splash = useSplash(props);

  return (
    <View style={[tw`flex-1 justify-center items-center`, styles.container]}>
      <IconLogo/>
      <Text style={[tw`mt-5 text-3xl text-white font-bold`]}>Contact App</Text>
    </View>
  )
}

export default Splash;