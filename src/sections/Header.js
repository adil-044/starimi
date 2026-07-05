import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { colors, fonts, business } from '../theme';
import { Container, Button, useResponsive, open } from '../ui';

const NAV = ['Home', 'About', 'Practice Areas', 'Results', 'Testimonials', 'Contact'];

function TopBar() {
  const { isMobile } = useResponsive();
  return (
    <View style={{ backgroundColor: colors.navyDeep }}>
      <Container>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: isMobile ? 'center' : 'space-between',
            paddingVertical: 9,
            flexWrap: 'wrap',
            gap: 14,
          }}>
          {!isMobile && (
            <Text style={{ color: '#c7d6e2', fontFamily: fonts.sans, fontSize: 13.5 }}>
              {business.address} {'\u00B7'} {business.cityState}
            </Text>
          )}
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 7 }}>
            <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: colors.gold }} />
            <Text style={{ color: colors.gold, fontFamily: fonts.sans, fontWeight: '700', fontSize: 13.5 }}>
              {business.hours} {'\u00B7'} Free Consultation
            </Text>
          </View>
        </View>
      </Container>
    </View>
  );
}

function NavLink({ label }) {
  const [hover, setHover] = React.useState(false);
  return (
    <Pressable onHoverIn={() => setHover(true)} onHoverOut={() => setHover(false)}>
      <Text
        style={{
          fontFamily: fonts.sans,
          fontWeight: '700',
          fontSize: 15,
          color: hover ? colors.orange : colors.ink,
          transitionDuration: '150ms',
        }}>
        {label}
      </Text>
    </Pressable>
  );
}

export default function Header() {
  const { isMobile } = useResponsive();
  return (
    <View style={{ backgroundColor: colors.navy }}>
      <TopBar />
      <View style={{ backgroundColor: colors.white, borderBottomWidth: 1, borderBottomColor: colors.line }}>
        <Container>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 16,
            }}>
            <Image
              source={require('../../assets/brand/logo.png')}
              style={{ width: isMobile ? 190 : 240, height: isMobile ? 53 : 67 }}
              resizeMode="contain"
              accessibilityLabel={business.name}
            />
            {!isMobile && (
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 26 }}>
                {NAV.map((n) => (
                  <NavLink key={n} label={n} />
                ))}
              </View>
            )}
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
              {!isMobile && (
                <Pressable onPress={() => open(business.phoneHref)}>
                  <Text style={{ fontFamily: fonts.sans, fontSize: 12, color: colors.slate, letterSpacing: 1, fontWeight: '700' }}>
                    CALL NOW
                  </Text>
                  <Text style={{ fontFamily: fonts.head, fontSize: 20, color: colors.navy, fontWeight: '700' }}>
                    {business.phone}
                  </Text>
                </Pressable>
              )}
              <Button label="Free Consultation" onPress={() => open(business.phoneHref)} />
            </View>
          </View>
        </Container>
      </View>
    </View>
  );
}
