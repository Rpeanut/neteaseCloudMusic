// 通用的样式工具
import { Dimensions, PixelRatio } from 'react-native';

const styles = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  onePixel: 1 / PixelRatio.get(),
  color: {
    theme: '#D43C33',
    backgroundColor: '#FBFCFE',
    white: '#ffffff',
    black: '#000000',
    border: '#e0e0e0',
    gray: '#828385',
    blue: '#0c73c2',
    blackCover: 'rgba(0, 0, 0, 0.3)',
  },
};

export default styles;
