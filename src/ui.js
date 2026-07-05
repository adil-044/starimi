import React from 'react';
import {
  View,
  Text,
  Pressable,
  Linking,
  useWindowDimensions,
} from 'react-native';
import { colors, fonts, radius, MAXW } from './theme';

export function useResponsive() {
  const { width } = useWindowDimensions();
  return {
    width,
    isMobile: width < 760,
    isTablet: width >= 760 && width < 1040,
    isDesktop: width >= 1040,
  };
}

export function open(url) {
  Linking.openURL(url).catch(() => {});
}

export function Container({ children, style, maxWidth = MAXW }) {
  return (
    <View style={{ width: '100%', alignItems: 'center' }}>
      <View style={[{ width: '100%', maxWidth, paddingHorizontal: 22 }, style]}>
        {children}
      </View>
    </View>
  );
}

export function Eyebrow({ children, light }) {
  return (
    <Text
      style={{
        fontFamily: fonts.sans,
        fontWeight: '800',
        fontSize: 13,
        letterSpacing: 2.5,
        textTransform: 'uppercase',
        color: light ? colors.orange : colors.orangeDark,
        marginBottom: 14,
      }}>
      {children}
    </Text>
  );
}

export function Button({ label, onPress, variant = 'primary', size = 'md', style }) {
  const [hover, setHover] = React.useState(false);
  const pad = size === 'lg' ? { pv: 18, ph: 34, fs: 17 } : { pv: 14, ph: 26, fs: 15 };
  const palettes = {
    primary: { bg: hover ? colors.orangeDark : colors.orange, fg: colors.white, border: 'transparent' },
    dark: { bg: hover ? colors.navyDeep : colors.navy, fg: colors.white, border: 'transparent' },
    ghost: { bg: hover ? 'rgba(255,255,255,0.12)' : 'transparent', fg: colors.white, border: 'rgba(255,255,255,0.55)' },
    outline: { bg: hover ? colors.navy : 'transparent', fg: hover ? colors.white : colors.navy, border: colors.navy },
  };
  const p = palettes[variant];
  return (
    <Pressable
      onPress={onPress}
      onHoverIn={() => setHover(true)}
      onHoverOut={() => setHover(false)}
      style={[
        {
          backgroundColor: p.bg,
          paddingVertical: pad.pv,
          paddingHorizontal: pad.ph,
          borderRadius: radius.pill,
          borderWidth: 2,
          borderColor: p.border,
          transitionDuration: '160ms',
          transform: [{ translateY: hover ? -2 : 0 }],
        },
        style,
      ]}>
      <Text
        style={{
          color: p.fg,
          fontFamily: fonts.sans,
          fontWeight: '800',
          fontSize: pad.fs,
          letterSpacing: 0.3,
          textAlign: 'center',
        }}>
        {label}
      </Text>
    </Pressable>
  );
}
