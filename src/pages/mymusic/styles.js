import { StyleSheet } from 'react-native';
import { width, color } from '../../utils/style';

const styles = StyleSheet.create({
  TopBar: {
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    backgroundColor: color.border,
  },
});

export default styles;
