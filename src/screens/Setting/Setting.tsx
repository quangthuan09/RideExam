import { View, Text } from 'react-native';
import React, { useCallback, useLayoutEffect } from 'react';
import { useAppNavigation } from '~/hooks/navigation';
import HeaderRight from '~/common/HeaderRight';
import { AppStyles } from '~/theme';

const Setting = () => {
  const navigation = useAppNavigation();

  const _handlePressDone = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight icon="checkmark" onPress={_handlePressDone} />,
    });
  }, [_handlePressDone, navigation]);
  return (
    <View style={AppStyles.container}>
      <Text>Setting</Text>
    </View>
  );
};

export default Setting;
