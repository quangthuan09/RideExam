import React, { useCallback, useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import HeaderRight from '~/common/HeaderRight';
import { useGetTopics } from '~/helper/fetchData';
import { useAppNavigation } from '~/hooks/navigation';
import { AppStyles } from '~/theme';
const Setting = () => {
  const navigation = useAppNavigation();
  const data = useGetTopics();
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
      {data.map((item, index) => {
        return (
          <View key={index}>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Setting;
