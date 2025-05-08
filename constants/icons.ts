import type { ImageSourcePropType } from 'react-native';

export const icons: Record<string, ImageSourcePropType> = {
  bookmark:   require('../assets/icons/bookmark.png'),
  config:     require('../assets/icons/config.png'),
  edit:       require('../assets/icons/edit.png'),
  eyeHide:    require('../assets/icons/eye-hide.png'),
  eye:        require('../assets/icons/eye.png'),
  goBack:     require('../assets/icons/go-back.png'),
  goDown:     require('../assets/icons/go-down.png'),
  goUp:       require('../assets/icons/go-up.png'),
  home:       require('../assets/icons/home.png'),
  leftArrow:  require('../assets/icons/left-arrow.png'),
  logout:     require('../assets/icons/logout.png'),
  menu:       require('../assets/icons/menu.png'),
  play:       require('../assets/icons/play.png'),
  plus:       require('../assets/icons/plus.png'),
  profile:    require('../assets/icons/profile.png'),
  rightArrow: require('../assets/icons/right-arrow.png'),
  search:     require('../assets/icons/search.png'),
  tick:       require('../assets/icons/tick.png'),
  upload:     require('../assets/icons/upload.png'),
} as const;
