import { AppRegistry } from 'react-native';
import App from './app/App';

/**
Ignore specific warning
 */
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


AppRegistry.registerComponent('onthemove', () => App);
