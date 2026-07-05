import React from 'react';
import { View, Text } from 'react-native';
import { colors, fonts, radius, shadow } from '../theme';
import { Container, Eyebrow, useResponsive } from '../ui';

const REVIEWS = [
  {
    q: 'Star Immigration and Citizenship Lawyers of Fresno is great for immigration work. From the very beginning they have been quick to respond and helpful every step of the way.',
    n: 'Sandeep Singh',
  },
  {
    q: 'Huge thank you to Attorney Sarwinder for taking me in as a very last-minute client and for answering all of my questions during my husband\u2019s case.',
    n: 'Yesenia Medrano',
  },
  {
    q: 'The team guided our family through a complex process with honesty and clear communication. We always knew our case was in capable hands.',
    n: 'Client of the Firm',
  },
];

function Stars() {
  return (
    <Text style={{ color: colors.gold, fontSize: 18, letterSpacing: 2 }}>
      {'\u2605\u2605\u2605\u2605\u2605'}
    </Text>
  );
}

export default function Testimonials() {
  const { isMobile, isTablet } = useResponsive();
  const cols = isMobile ? 1 : isTablet ? 2 : 3;
  const w = cols === 1 ? '100%' : ((100 - (cols - 1) * 2) / cols) + '%';
  return (
    <View style={{ backgroundColor: colors.mist, paddingVertical: isMobile ? 48 : 84 }}>
      <Container>
        <View style={{ alignItems: 'center', marginBottom: 40 }}>
          <Eyebrow>What Our Clients Say</Eyebrow>
          <Text style={{ fontFamily: fonts.head, fontWeight: '600', fontSize: isMobile ? 32 : 44, color: colors.navy, textAlign: 'center', letterSpacing: -0.4 }}>
            Trusted by families across the Valley
          </Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 20, justifyContent: 'center' }}>
          {REVIEWS.map((r) => (
            <View key={r.n} style={[{ width: w, backgroundColor: colors.white, borderRadius: radius.md, padding: 26 }, shadow.soft]}>
              <Text style={{ fontFamily: fonts.head, fontSize: 46, lineHeight: 46, color: colors.orange, height: 30 }}>{'\u201C'}</Text>
              <Stars />
              <Text style={{ fontFamily: fonts.sans, fontSize: 15, lineHeight: 24, color: colors.slate, marginTop: 10 }}>
                {r.q}
              </Text>
              <Text style={{ fontFamily: fonts.sans, fontWeight: '800', fontSize: 15, color: colors.navy, marginTop: 16 }}>
                {r.n}
              </Text>
            </View>
          ))}
        </View>
      </Container>
    </View>
  );
}
