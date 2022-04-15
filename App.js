import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import MainContainer from './navigation/MainContainer';
import Landing from './src/intro/Landing';
import Navigation from './src/intro/navigation/Navigation';
import AllocationChart from './src/screens/AllocationChart';

LogBox.ignoreLogs(['AsyncStorage']);

export default function App() {
  return (
      <Navigation />
  );
}
