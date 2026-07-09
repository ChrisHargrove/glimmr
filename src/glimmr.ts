import { glimmrImpl } from './glimmrImpl';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  SectionList,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  Button,
  Switch,
  ActivityIndicator,
  Modal,
  SafeAreaView,
  KeyboardAvoidingView,
  RefreshControl,
  VirtualizedList,
  DrawerLayoutAndroid,
  // Add more as needed
} from 'react-native';

const glimmr = Object.assign(glimmrImpl, {
  View: glimmrImpl(View),
  Text: glimmrImpl(Text),
  Image: glimmrImpl(Image),
  ScrollView: glimmrImpl(ScrollView),
  FlatList: glimmrImpl(FlatList),
  SectionList: glimmrImpl(SectionList),
  TextInput: glimmrImpl(TextInput),
  TouchableOpacity: glimmrImpl(TouchableOpacity),
  TouchableHighlight: glimmrImpl(TouchableHighlight),
  TouchableWithoutFeedback: glimmrImpl(TouchableWithoutFeedback),
  Pressable: glimmrImpl(Pressable),
  Button: glimmrImpl(Button),
  Switch: glimmrImpl(Switch),
  ActivityIndicator: glimmrImpl(ActivityIndicator),
  Modal: glimmrImpl(Modal),
  SafeAreaView: glimmrImpl(SafeAreaView),
  KeyboardAvoidingView: glimmrImpl(KeyboardAvoidingView),
  RefreshControl: glimmrImpl(RefreshControl),
  VirtualizedList: glimmrImpl(VirtualizedList),
  DrawerLayoutAndroid: glimmrImpl(DrawerLayoutAndroid),
  // Add more as needed
});

export default glimmr;
