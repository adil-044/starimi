import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { colors, fonts, radius } from '../theme';
import { Container, Eyebrow, useResponsive } from '../ui';

const CITIES = [
  ['Fresno', 'Our main office delivers trusted, personalized immigration support.'],
  ['Bakersfield', 'Residents rely on our firm for effective immigration solutions.'],
  ['Clovis', 'Reliable legal representation for immigration cases.'],
  ['Madera', 'Helping Madera residents with immigration legal needs.'],
  ['Visalia', 'Supporting clients with legal services for immigration solutions.'],
  ['Hanford', 'Skilled legal support for immigration challenges.'],
  ['Tulare', 'Residents rely on our team for immigration legal services.'],
  ['Sanger', 'Dedicated legal assistance for immigration issues.'],
  ['Chowchilla', 'Clear guidance on a range of immigration matters.'],
  ['Kerman', 'Legal services for immigration assistance.'],
  ['Mendota', 'Support for clients navigating immigration cases.'],
  ['Reedley', 'Serving the greater Fresno County community.'],
];

function Chip({ label }) {
  const [h, setH] = React.useState(false);
  return (
    <Pressable
      onHoverIn={() => setH(true)}
      onHoverOut={() => setH(false)}
      style={{
        backgroundColor: h ? colors.orange : colors.white,
        borderWidth: 1,
        borderColor: h ? colors.orange : colors.line,
        borderRadius: radius.pill,
        paddingVertical: 9,
        paddingHorizontal: 16,
        transitionDuration: '150ms',
      }}>
      <Text style={{ fontFamily: fonts.sans, fontWeight: '700', fontSize: 13.5, color: h ? colors.white : colors.navy }}>
        {label}
      </Text>
    </Pressable>
  );
}

export default function Areas() {
  const { isMobile, isTablet } = useResponsive();
  const cols = isMobile ? 1 : isTablet ? 2 : 3;
  const w = cols === 1 ? '100%' : ((100 - (cols - 1) * 2) / cols) + '%';
  const extra = ['Merced', 'San Joaquin', 'Selma'];
  return (
    <View style={{ backgroundColor: colors.white, paddingVertical: isMobile ? 48 : 84 }}>
      <Container>
        <View style={{ alignItems: 'center', marginBottom: 36 }}>
          <Eyebrow>Areas We Serve</Eyebrow>
          <Text style={{ fontFamily: fonts.head, fontWeight: '600', fontSize: isMobile ? 32 : 44, color: colors.navy, textAlign: 'center', letterSpacing: -0.4 }}>
            Proudly serving California{'\u2019'}s Central Valley
          </Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 18, justifyContent: 'center' }}>
          {CITIES.map(([c, d]) => (
            <View key={c} style={{ width: w, borderLeftWidth: 3, borderLeftColor: colors.orange, paddingLeft: 16, paddingVertical: 4 }}>
              <Text style={{ fontFamily: fonts.head, fontWeight: '700', fontSize: 20, color: colors.navy }}>{c}, CA</Text>
              <Text style={{ fontFamily: fonts.sans, fontSize: 14.5, lineHeight: 21, color: colors.slate, marginTop: 4 }}>{d}</Text>
            </View>
          ))}
        </View>
        <View style={{ alignItems: 'center', marginTop: 36 }}>
          <Text style={{ fontFamily: fonts.sans, fontWeight: '700', fontSize: 13, color: colors.slate, letterSpacing: 1, marginBottom: 14 }}>
            MORE AREAS SERVED
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {extra.map((c) => (
              <Chip key={c} label={c + ', CA'} />
            ))}
          </View>
        </View>
      </Container>
    </View>
  );
}
