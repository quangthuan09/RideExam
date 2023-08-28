import { Icon } from '@rneui/themed';
import React, { useCallback, useEffect, useLayoutEffect } from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TItemFeater } from '~/@types/home';
import { MAP_FEATURE_HOME } from '~/helper/constant';
import { useAppNavigation } from '~/hooks/navigation';
import { AppStyles, Colors, S12, S16, S8 } from '~/theme';
import { useAppTranslation } from '~/translations';

const Home = () => {
  const navigation = useAppNavigation();
  const { t } = useAppTranslation();

  const _gotoSetting = useCallback(() => {
    navigation.navigate('Main', {
      screen: 'Setting',
    });
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: t('200questionA1'),
      headerRight: () => {
        return (
          <TouchableOpacity onPress={_gotoSetting}>
            <Icon name="settings-outline" color={Colors.white} type="ionicon" />
          </TouchableOpacity>
        );
      },
    });
  }, [_gotoSetting, navigation, t]);

  const _handleGoto = useCallback(
    (item: TItemFeater) => {
      switch (item.id) {
        case 1:
          navigation.navigate('Main', {
            screen: 'RandomQuest',
          });
          return;
        case 2:
          navigation.navigate('Main', {
            screen: 'SetTopic',
          });
          return;
        case 3:
          navigation.navigate('Main', {
            screen: 'SeeWrongAnswer',
          });
          return;
        case 4:
          navigation.navigate('Main', {
            screen: 'StudyQuestion',
          });
          return;
        case 5:
          navigation.navigate('Main', {
            screen: 'Signs',
          });
          return;
        case 6:
          navigation.navigate('Main', {
            screen: 'Tips',
          });
          return;
        case 7:
          navigation.navigate('Main', {
            screen: 'Traps',
          });
          return;
        case 8:
          navigation.navigate('Main', {
            screen: 'TopWrongAnswer',
          });
          return;
        default:
          break;
      }
    },
    [navigation]
  );
  const _renderItem: ListRenderItem<TItemFeater> = useCallback(
    ({ item, index }) => {
      return (
        <TouchableOpacity
          style={[
            styles.item,
            {
              backgroundColor: item.backgroundColor,
            },
          ]}
          onPress={() => _handleGoto(item)}
        >
          <Icon name={item.icon} type="ionicon" size={50} color={Colors.white} />
          <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
      );
    },
    [_handleGoto]
  );
  return (
    <FlatList
      style={AppStyles.container}
      data={MAP_FEATURE_HOME}
      renderItem={_renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.contentContainer}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Home;
const styles = StyleSheet.create({
  text: {
    color: Colors.white,
    paddingTop: S8,
  },
  contentContainer: {
    paddingBottom: 100,
    paddingTop: S8,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: S8 / 2,
    flex: 1,
    padding: S16,
    borderRadius: S12,
  },
});
