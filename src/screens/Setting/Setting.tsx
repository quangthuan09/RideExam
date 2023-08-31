import { Icon } from '@rneui/themed';
import React, { useCallback, useLayoutEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FORMAT_ANSWER } from '~/helper/constant';
import { useAppNavigation } from '~/hooks/navigation';
import { AppStyles, Colors, S16 } from '~/theme';
import { S8, paddingBottom } from '~/theme/normalize';
import DeviceInfo from 'react-native-device-info';
import { useAppDispatch, useAppSelector } from '~/store';
import { TTopic } from '~/store/setting/type';
import { setTopicChoose } from '~/store/setting/reducer';

const Setting = () => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setting = useAppSelector((state) => state.setting.topics);
  const topicChoose = useAppSelector((state) => state.setting.topicsChoose);
  const [selectedCert, setSelectedCert] = useState<TTopic>(topicChoose);
  const [selectedAnswerType, setSelectedAnswerType] = useState<number>();

  const _handlePressDone = useCallback(() => {
    navigation.replace('Main', {
      screen: 'Home',
    });
    if (selectedCert?.type) dispatch(setTopicChoose(selectedCert));
  }, [dispatch, navigation, selectedCert]);

  const sortData = useMemo(() => {
    if (setting) {
      return [...setting]?.sort((a, b) => a.type.localeCompare(b.type));
    }
    return [];
  }, [setting]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={_handlePressDone}>
          <Text style={styles.done}>XONG</Text>
        </TouchableOpacity>
      ),
    });
  }, [_handlePressDone, navigation]);

  const _handleChooseCert = (item: TTopic, index: number) => {
    setSelectedCert(item);
  };
  const _handleChooseAnswerType = (index: number) => {
    setSelectedAnswerType(index);
  };
  return (
    <ScrollView style={AppStyles.container} contentContainerStyle={styles.container}>
      <Text style={styles.label}>LOẠI BẰNG LÁI</Text>
      <View style={styles.listCert}>
        {sortData.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.item,
                {
                  borderBottomWidth: sortData?.length - 1 > index ? 0.5 : 0,
                },
              ]}
              onPress={() => _handleChooseCert(item, index)}
            >
              <View style={styles.f1}>
                <Text
                  style={[
                    styles.name,
                    {
                      color: selectedCert?.type === item.type ? Colors.blue : Colors.black,
                      fontWeight: selectedCert?.type === item.type ? 'bold' : 'normal',
                    },
                  ]}
                >
                  {item.name}
                </Text>
                <Text>{item.description}</Text>
              </View>
              {selectedCert?.type === item.type && (
                <Icon name={'checkmark'} type="ionicon" color={Colors.blue} />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
      <Text style={styles.label}>HIỂN THỊ ĐÁP ÁN CỦA CÂU HỎI</Text>
      <View style={styles.listCert}>
        {FORMAT_ANSWER.map((itemAnswer, indexAnswer) => {
          return (
            <TouchableOpacity
              key={indexAnswer}
              style={[
                styles.item,
                {
                  borderBottomWidth: FORMAT_ANSWER?.length - 1 > indexAnswer ? 0.5 : 0,
                },
              ]}
              onPress={() => _handleChooseAnswerType(indexAnswer)}
            >
              <View style={styles.f1}>
                <Text
                  style={[
                    styles.name,
                    {
                      color: selectedAnswerType === indexAnswer ? Colors.blue : Colors.black,
                      fontWeight: selectedAnswerType === indexAnswer ? 'bold' : 'normal',
                    },
                  ]}
                >
                  {itemAnswer.title}
                </Text>
              </View>
              {selectedAnswerType === indexAnswer && (
                <Icon name={'checkmark'} type="ionicon" color={Colors.blue} />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
      <Text style={styles.label}>PHIÊN BẢN</Text>
      <Text
        style={[
          styles.listCert,
          {
            paddingVertical: S8,
          },
        ]}
      >
        {DeviceInfo.getVersion()}
      </Text>
    </ScrollView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    paddingBottom,
  },
  label: {
    color: Colors.gray,
    paddingHorizontal: S16,
    paddingBottom: S8,
    paddingTop: S16,
  },
  listCert: {
    backgroundColor: Colors.palette2,
    paddingHorizontal: S16,
  },
  item: {
    paddingVertical: S16,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.palette3,
  },
  f1: {
    flex: 1,
  },
  done: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  name: {
    fontSize: S16,
    paddingBottom: S8,
  },
});
