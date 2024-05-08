import {Image} from 'react-native';
import logo from '../img/logo_t.png';

export const Logo = ({withHeader = true}: {withHeader?: boolean}) => (
  <Image
    source={logo}
    style={{
      position: 'absolute',
      top: withHeader ? 40 : 100,
      left: 20,
      opacity: 0.2,
      zIndex: -1,
    }}
  />
);
