import { Image, OpaqueColorValue, type ImageStyle, type StyleProp } from 'react-native';
import { icons } from '../constants/icons';
import { NativeIcon, type NativeIconName } from './NativeIcon';

type CustomIconName = keyof typeof icons;
export type MyIconName = CustomIconName | NativeIconName;

type Props = {
  name: MyIconName;
  size?: number;
  color?: string | OpaqueColorValue;
  style?: StyleProp<ImageStyle>;
};

export function CustomIcon({ name, size = 24, color, style }: Props) {
  // 1) Si existe en tu mapa de PNG, usa <Image>
  if ((icons as Record<string, unknown>)[name]) {
    return (
      <Image
        source={icons[name as CustomIconName]}
        resizeMode="contain"
        style={[{ width: size, height: size, tintColor: color }, style]}
      />
    );
  }

  // 2) Si no, delega a NativeIcon (SF Symbols/Material)
  return (
    <NativeIcon
      name={name as NativeIconName}
      size={size}
      color={color ?? 'black'}
      style={style}
    />
  );
}
