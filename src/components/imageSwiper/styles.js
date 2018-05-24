import { StyleSheet } from 'react-native';
import { width, color } from '../../utils/style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: width / 3,
  },

  wrapper: {},

  slide: {
    width,
    height: width / 3,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    flex: 1,
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  image: {
    width,
    height: width / 3,
  },
  dot: {
    backgroundColor: color.white,
    width: 5,
    height: 5,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: color.theme,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  pagination: {
    bottom: 0,
    right: 10,
  },
});

export default styles;
