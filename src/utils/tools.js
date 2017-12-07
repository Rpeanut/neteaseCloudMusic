//  简单的工具类
import { AsyncStorage } from 'react-native';

export function getLocalStorage(key) {
  return AsyncStorage.getItem(key).then(value => JSON.parse(value));
}

export function setLocalStorage(key, value) {
  return AsyncStorage.setItem(key, JSON.stringify(value));
}

export function removeLocalStorage(key) {
  return AsyncStorage.removeItem(key);
}
