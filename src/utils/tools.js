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

export function reqAPI(url, data) {
  if (data) {
    return fetch(url, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    }).then(response => response.json());
  }
  return fetch(url).then(response => response.json());
}
