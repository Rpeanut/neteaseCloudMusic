// 通用的样式工具
import { Dimensions, PixelRatio } from 'react-native';

export default {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  onePixel: 1 / PixelRatio.get(),
  flex1: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColunm: {
    flexDirection: 'column',
  },
  vcenter: {
    alignItems: 'center',
  },
  hcenter: {
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
};
