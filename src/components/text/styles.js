import { StyleSheet } from 'react-native';
import { color } from '../../utils/style';

export default StyleSheet.create({
  H1: {
    fontSize: 25,
    fontWeight: '800',
    color: color.black,
  },
  H2: {
    fontSize: 18,
    fontWeight: '500',
    color: color.black,
  },
  H3: {
    fontSize: 16,
    fontWeight: '300',
    color: color.black,
  },
  H4: {
    fontSize: 14,
    fontWeight: '200',
    color: color.black,
    lineHeight: 16,
  },
  normal: {
    fontSize: 14,
    color: color.black,
    lineHeight: 16,
  },
  tip: {
    fontSize: 12,
  },
  small: {
    fontSize: 10,
    color: color.black,
  },
});
