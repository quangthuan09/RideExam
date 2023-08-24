import { TouchableOpacity } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/themed';
import { Colors } from '~/theme';

type TProps = {
  onPress: () => void;
  icon: string;
};
const HeaderRight = ({ onPress, icon }: TProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={icon} type="ionicon" color={Colors.white} />
    </TouchableOpacity>
  );
};

export default HeaderRight;
