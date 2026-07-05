import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { colors, fonts, radius, shadow } from '../theme';
import { Container, Eyebrow, useResponsive } from '../ui';

const AREAS = [
  { t: 'Immigration', d: 'Comprehensive representation across the full range of immigration matters.', icon: require('../../assets/brand/immigration-lawyer.png') },
  { t: 'Green Card / Adjustment of Status', d: 'Guidance through family and employment-based permanent residency.', icon: require('../../assets/brand/green-card-lawyer.png') },
  { t: 'Spouse Visa', d: 'Reuniting families and helping couples build their future together.', icon: require('../../assets/brand/spouse-visa-lawyer.png') },
  { t: 'Naturalization & Citizenship', d: 'Helping you take the final step toward becoming a U.S. citizen.', icon: require('../../assets/brand/naturalization-attorney.png') },
  { t: 'Deportation Defense', d: 'Aggressive defense to keep you and your family in the country.', icon: require('../../assets/brand/deportation-defense-lawyer.png') },
  { t: 'Asylum', d: 'Protecting those who fear persecution and seek safety in the U.S.', icon: require('../../assets/brand/asylum-attorney.png') },
];

function Card({ a, w }) {
  const [hover, setHover] = React.useState(false);
  return (
    <Pressable
      onHoverIn={() => setHover(true)}
      onHoverOut={() => setHover(false)}
      style={[
        {
          width: w,
          backgroundColor: colors.white,
          borderRadius: radius.md,
          padding: 24,
          borderWidth: 1,
          borderColor: hover ? colors.orange : colors.line,
          transitionDuration: '160ms',
          transform: [{ translateY: hover ? -4 : 0 }],
        },
        hover ? shadow.card : shadow.soft,
      ]}>
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 16,
          backgroundColor: hover ? colors.orange : colors.mist,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 16,
          transitionDuration: '160ms',
        }}>
        <Image source={a.icon} style={{ width: 34, height: 34 }} resizeMode="contain" />
      </View>
      <Text style={{ fontFamily: fonts.head, fontWeight: '700', fontSize: 19, lineHeight: 24, color: colors.navy }}>
        {a.t}
      </Text>
      <Text style={{ fontFamily: fonts.sans, fontSize: 14.5, lineHeight: 22, color: colors.slate, marginTop: 8 }}>
        {a.d}
      </Text>
      <Text style={{ fontFamily: fonts.sans, fontWeight: '800', fontSize: 13.5, color: colors.orangeDark, marginTop: 14, letterSpacing: 0.3 }}>
        Learn more {'\u2192'}
      </Text>
    </Pressable>
  );
}

export default function Practice() {
  const { isMobile, isTablet } = useResponsive();
  const cols = isMobile ? 1 : isTablet ? 2 : 3;
  const w = cols === 1 ? '100%' : ((100 - (cols - 1) * 2) / cols) + '%';
  return (
    <View style={{ backgroundColor: colors.white, paddingVertical: isMobile ? 48 : 84 }}>
      <Container>
        <View style={{ alignItems: 'center', marginBottom: 40 }}>
          <Eyebrow>Our Practice Areas</Eyebrow>
          <Text style={{ fontFamily: fonts.head, fontWeight: '600', fontSize: isMobile ? 32 : 44, color: colors.navy, textAlign: 'center', letterSpacing: -0.4 }}>
            Our practice brings justice
          </Text>
          <Text style={{ fontFamily: fonts.sans, fontSize: 16, lineHeight: 26, color: colors.slate, textAlign: 'center', marginTop: 14, maxWidth: 720 }}>
            SSD Law Firm PC steps in with tailored legal strategies, clear communication, and
            aggressive representation. We negotiate relentlessly, litigate when necessary, and
            always prioritize your best interests.
          </Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 20, justifyContent: 'center' }}>
          {AREAS.map((a) => (
            <Card key={a.t} a={a} w={w} />
          ))}
        </View>
      </Container>
    </View>
  );
}
