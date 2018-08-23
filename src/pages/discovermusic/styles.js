import { StyleSheet } from 'react-native';
import { width, height, color } from '../../utils/style';

const styles = StyleSheet.create({
  searchBar: {
    borderRadius: 30,
    backgroundColor: color.white,
    width: width / 3 * 2,
    height: height / 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
