import { LogBox } from 'react-native';
import Navigation from './src/intro/navigation/Navigation';

LogBox.ignoreLogs(['AsyncStorage']);
LogBox.ignoreLogs(['Settting a timer']);

export default function App() {
  return (
      <Navigation />
  );
}
