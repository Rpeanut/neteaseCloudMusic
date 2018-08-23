import { StyleSheet } from 'react-native';
import { width, color, onePixel } from '../../utils/style';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEFF1',
    flex: 1,
  },
  navigationHeader: {
    backgroundColor: color.theme,
    paddingRight: 10,
    paddingLeft: 10,
  },
  infoContainer: {
    height: width / 4,
    width,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#ffffff',
  },
  SignIn: {
    borderRadius: 20,
    borderWidth: onePixel / 4,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  menuWrap: {
    height: width / 8,
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
  },
  menuItem: {
    width: '25%',
    height: '60%',
    borderRightWidth: onePixel,
    borderColor: color.border,
    alignItems: 'center',
  },
});

export default styles;
