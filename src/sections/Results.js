import React from 'react';
import { View, Text } from 'react-native';
import { colors, fonts, radius } from '../theme';
import { Container, Eyebrow, useResponsive } from '../ui';

const RESULTS = [
  'Cancellation of Removal',
  'Deportation Terminated',
  'Permanent Residency Restored',
  'Asylum Granted',
  'Green Card Approved',
  'Naturalization Completed',
];

export default function Results() {
  const { isMobile, isTablet } = useResponsive();
  const cols = isMobile ? 1 : isTablet ? 2 : 3;
  const w = cols === 1 ? '100%' : ((100 - (cols - 1) * 2) / cols) + '%';
  return (
    <View style={{ backgroundColor: colors.navy, paddingVertical: isMobile ? 48 : 84 }}>
      <Container>
        <View style={{ alignItems: 'center', marginBottom: 40 }}>
          <Eyebrow light>Our Results</Eyebrow>
          <Text style={{ fontFamily: fonts.head, fontWeight: '600', fontSize: isMobile ? 32 : 44, color: colors.white, textAlign: 'center', letterSpacing: -0.4 }}>
            Our results speak for themselves
          </Text>
          <Text style={{ fontFamily: fonts.sans, fontSize: 16, lineHeight: 26, color: '#c7d6e2', textAlign: 'center', marginTop: 14, maxWidth: 720 }}>
            We let our track record do the talking. When you choose us, you select a team with
            proven success, a deep understanding of the law, and an unwavering commitment to justice.
          </Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 20, justifyContent: 'center' }}>
          {RESULTS.map((r, i) => (
            <View
              key={r}
              style={{
                width: w,
                backgroundColor: colors.navyDeep,
                borderRadius: radius.md,
                padding: 26,
                borderLeftWidth: 4,
                borderLeftColor: colors.orange,
              }}>
              <Text style={{ fontFamily: fonts.head, fontWeight: '700', fontSize: 15, color: colors.gold, letterSpacing: 1 }}>
                CASE {String(i + 1).padStart(2, '0')}
              </Text>
              <Text style={{ fontFamily: fonts.head, fontWeight: '600', fontSize: 24, lineHeight: 30, color: colors.white, marginTop: 8 }}>
                {r}
              </Text>
              <Text style={{ fontFamily: fonts.sans, fontSize: 14, color: '#9fb6c8', marginTop: 8 }}>
                Successful outcome achieved for our client.
              </Text>
            </View>
          ))}
        </View>
      </Container>
    </View>
  );
}
