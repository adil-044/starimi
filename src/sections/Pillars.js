import React from 'react';
import { View, Text, Image } from 'react-native';
import { colors, fonts, radius, shadow } from '../theme';
import { Container, useResponsive } from '../ui';

const ITEMS = [
  { t: 'Justice', d: 'We seek justice on your behalf, reviewing every case personally.', icon: require('../../assets/brand/results-icon.png') },
  { t: 'Experience', d: 'Fierce advocates who understand how immigration authorities work.', icon: require('../../assets/brand/exp-icon.png') },
  { t: 'Results', d: 'A proven track record of outcomes that change lives and keep families together.', icon: require('../../assets/brand/trust-icon.png') },
];

export default function Pillars() {
  const { isMobile } = useResponsive();
  return (
    <View style={{ backgroundColor: colors.cream }}>
      <Container style={{ marginTop: isMobile ? -30 : -46, paddingBottom: 20 }}>
        <View style={{ flexDirection: isMobile ? 'column' : 'row', gap: 20 }}>
          {ITEMS.map((it) => (
            <View
              key={it.t}
              style={[
                {
                  flex: 1,
                  backgroundColor: colors.white,
                  borderRadius: radius.lg,
                  padding: 26,
                  borderTopWidth: 4,
                  borderTopColor: colors.orange,
                },
                shadow.soft,
              ]}>
              <View
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: 14,
                  backgroundColor: colors.orangeSoft,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                }}>
                <Image source={it.icon} style={{ width: 30, height: 30 }} resizeMode="contain" />
              </View>
              <Text style={{ fontFamily: fonts.head, fontWeight: '700', fontSize: 22, color: colors.navy }}>
                {it.t}
              </Text>
              <Text style={{ fontFamily: fonts.sans, fontSize: 15, lineHeight: 23, color: colors.slate, marginTop: 8 }}>
                {it.d}
              </Text>
            </View>
          ))}
        </View>
      </Container>
    </View>
  );
}
