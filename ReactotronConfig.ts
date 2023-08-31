import Reactotron, { networking } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage'; // defaults to localStorage for web

if (__DEV__) {
  if (Reactotron.clear && Reactotron.setAsyncStorageHandler) {
    Reactotron.setAsyncStorageHandler(AsyncStorage)
      .configure({
        name: 'Ride exam',
      })
      .useReactNative({
        overlay: false, // just turning off overlay
        networking: {
          // optionally, you can turn it off with false.
          ignoreUrls: /symbolicate|https:\/\/clients3\.google\.com\/generate_204|socket\.io/,
        },
      })
      .use(
        networking({
          //   ignoreContentTypes: /^(image)\/.*$/i,
          ignoreUrls: /\/(logs|symbolicate)$/,
        })
      )
      .use(reactotronRedux())
      .connect();
    Reactotron.clear();
  }

  console.tron = Reactotron;
}
