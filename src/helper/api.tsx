import firestore from '@react-native-firebase/firestore';
import { TTopicItem } from './type';

export const FetchApi = {
  getTopics: () => {
    return firestore()
      .collection('topics')
      .get()
      .then((res) => {
        const resList: Array<TTopicItem> = [];
        res.forEach((documentSnapshot) => {
          const itemConvert = {
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          };
          resList.push(itemConvert as TTopicItem);
        });
        return resList;
      });
  },
};
