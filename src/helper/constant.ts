import { Dimensions } from 'react-native';
import { TItemFeater } from '../@types/home';
import { Colors } from '../theme';

export const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('window');

export const MAP_FEATURE_HOME: Array<TItemFeater> = [
  {
    id: 1,
    title: 'Đề ngẫu nhiên',
    backgroundColor: Colors.orange,
    icon: 'shuffle',
  },
  {
    id: 2,
    title: 'Thi theo bộ đề',
    backgroundColor: Colors.lightblue,
    icon: 'document-text-outline',
  },
  {
    id: 3,
    title: 'Xem câu bị sai',
    backgroundColor: Colors.brown,
    icon: 'eye-outline',
  },
  {
    id: 4,
    title: 'Ôn tập câu hỏi',
    backgroundColor: Colors.gray,
    icon: 'library-outline',
  },
  {
    id: 5,
    title: 'Các biển báo',
    backgroundColor: Colors.green,
    icon: 'alert-circle-outline',
  },
  {
    id: 6,
    title: 'Mẹo ghi nhớ',
    backgroundColor: Colors.purple,
    icon: 'color-wand-outline',
  },
  {
    id: 7,
    title: '54 câu điểm liệt',
    backgroundColor: Colors.red,
    icon: 'document-attach-outline',
  },
  {
    id: 8,
    title: 'Top 50 câu sai',
    backgroundColor: Colors.lightgreen,
    icon: 'bug-outline',
  },
  {
    id: 9,
    title: '120 câu mô phỏng',
    backgroundColor: Colors.gray,
    icon: 'people-outline',
  },
  {
    id: 10,
    title: 'Bỏ quảng cáo',
    backgroundColor: Colors.lightpink,
    icon: 'close-circle-outline',
  },
];
