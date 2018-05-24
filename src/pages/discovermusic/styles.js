import { StyleSheet } from 'react-native';
import { width, height } from '../../utils/style';

const styles = StyleSheet.create({
  searchBar: {
    borderRadius: 30,
    backgroundColor: '#ffffff',
    width: width / 3 * 2,
    height: height / 12,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
