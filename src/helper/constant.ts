import { Dimensions } from "react-native";
import { TItemFeater } from "../@types/home";
import { Colors, Images } from "../theme";

export const { width: ScreenWidth, height: ScreenHeight } =
  Dimensions.get("window");

export const MAP_FEATURE_HOME: Array<TItemFeater> = [
  {
    id: 1,
    title: "Đề ngẫu nhiên",
    image: Images.success,
    backgroundColor: Colors.orange,
  },
  {
    id: 2,
    title: "Thi theo bộ đề",
    image: Images.success,
    backgroundColor: Colors.lightblue,
  },
  {
    id: 3,
    title: "Xem câu bị sai",
    image: Images.success,
    backgroundColor: Colors.brown,
  },
  {
    id: 4,
    title: "Ôn tập câu hỏi",
    image: Images.success,
    backgroundColor: Colors.gray,
  },
  {
    id: 5,
    title: "Các biển báo",
    image: Images.success,
    backgroundColor: Colors.green,
  },
  {
    id: 6,
    title: "Mẹo ghi nhớ",
    image: Images.success,
    backgroundColor: Colors.purple,
  },
  {
    id: 7,
    title: "54 câu điểm liệt",
    image: Images.success,
    backgroundColor: Colors.red,
  },
  {
    id: 8,
    title: "Top 50 câu sai",
    image: Images.success,
    backgroundColor: Colors.lightgreen,
  },
  {
    id: 9,
    title: "120 câu mô phỏng",
    image: Images.success,
    backgroundColor: Colors.gray,
  },
  {
    id: 10,
    title: "Bỏ quảng cáo",
    image: Images.success,
    backgroundColor: Colors.lightpink,
  },
];
