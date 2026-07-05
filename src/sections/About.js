import React from 'react';
import { View, Text, Image } from 'react-native';
import { colors, fonts, radius, shadow, business } from '../theme';
import { Container, Eyebrow, Button, useResponsive, open } from '../ui';

const POINTS = [
  ['Personalized Support', 'From family reunifications to employment-based green cards, we treat every case with the attention it deserves.'],
  ['Comprehensive Services', 'Work visas, green cards, deportation defense, naturalization, citizenship, asylum and more.'],
  ['Local Presence', 'We have helped clients all over Fresno and beyond achieve their immigration goals.'],
  ['Affordable & Accessible', 'Flexible payment plans make our services accessible to all families and businesses.'],
];

export default function About() {
  const { isMobile } = useResponsive();
  return (
    <View style={{ backgroundColor: colors.cream, paddingVertical: isMobile ? 48 : 84 }}>
      <Container>
        <View style={{ flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 34 : 56, alignItems: 'flex-start' }}>
          <View style={{ flex: 1 }}>
            <Eyebrow>Representation You Can Trust</Eyebrow>
            <Text style={{ fontFamily: fonts.head, fontWeight: '600', fontSize: isMobile ? 32 : 42, lineHeight: isMobile ? 38 : 48, color: colors.navy, letterSpacing: -0.4 }}>
              A serious attorney for serious problems
            </Text>
            <Text style={{ fontFamily: fonts.sans, fontSize: 16, lineHeight: 27, color: colors.slate, marginTop: 18 }}>
              When life presents complex immigration situations, you need more than just legal
              help {'\u2014'} you need fierce advocates who will not back down. We understand that
              immigration authorities often prioritize their own interests.
            </Text>
            <Text style={{ fontFamily: fonts.sans, fontSize: 16, lineHeight: 27, color: colors.slate, marginTop: 14 }}>
              Trust is the foundation of our client relationships. We prioritize honesty,
              transparency, and open communication {'\u2014'} from the first consultation to the
              final resolution, we are by your side, fighting for your rights.
            </Text>
            <View style={{ marginTop: 26, gap: 16 }}>
              {POINTS.map(([t, d]) => (
                <View key={t} style={{ flexDirection: 'row', gap: 14, alignItems: 'flex-start' }}>
                  <View style={{ width: 26, height: 26, borderRadius: 13, backgroundColor: colors.orange, alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
                    <Text style={{ color: colors.white, fontWeight: '900', fontSize: 15, fontFamily: fonts.sans }}>{'\u2713'}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontFamily: fonts.sans, fontWeight: '800', fontSize: 16, color: colors.navy }}>{t}</Text>
                    <Text style={{ fontFamily: fonts.sans, fontSize: 15, lineHeight: 22, color: colors.slate, marginTop: 2 }}>{d}</Text>
                  </View>
                </View>
              ))}
            </View>
            <Button label="Speak With An Experienced Lawyer" onPress={() => open(business.phoneHref)} style={{ alignSelf: 'flex-start', marginTop: 28 }} />
          </View>

          <View style={{ width: isMobile ? '100%' : 380 }}>
            <View style={[{ backgroundColor: colors.navy, borderRadius: radius.lg, padding: 30, overflow: 'hidden' }, shadow.card]}>
              <Image source={require('../../assets/brand/trust-icon.png')} style={{ width: 46, height: 46, marginBottom: 18 }} resizeMode="contain" />
              <Text style={{ fontFamily: fonts.head, fontWeight: '600', fontSize: 26, lineHeight: 32, color: colors.white }}>
                Our results speak for themselves
              </Text>
              <Text style={{ fontFamily: fonts.sans, fontSize: 15, lineHeight: 24, color: '#c7d6e2', marginTop: 12 }}>
                We defend immigration cases and deliver outcomes that change lives. Clients trust
                us because we keep families together through complex processes.
              </Text>
              <View style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.14)', marginVertical: 22 }} />
              {[
                ['24/7', 'Availability for urgent immigration matters'],
                ['2', 'Languages: Spanish & Punjabi supported'],
                ['100%', 'Personal case review by an attorney'],
              ].map(([n, l]) => (
                <View key={n} style={{ flexDirection: 'row', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                  <Text style={{ fontFamily: fonts.head, fontWeight: '700', fontSize: 30, color: colors.orange, width: 74 }}>{n}</Text>
                  <Text style={{ fontFamily: fonts.sans, fontSize: 14, lineHeight: 20, color: '#c7d6e2', flex: 1 }}>{l}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Container>
    </View>
  );
}
