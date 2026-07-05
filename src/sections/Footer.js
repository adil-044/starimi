import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { colors, fonts, radius, business } from '../theme';
import { Container, Button, useResponsive, open } from '../ui';

function FinalCTA() {
  const { isMobile } = useResponsive();
  return (
    <View style={{ backgroundColor: colors.orange, paddingVertical: isMobile ? 44 : 66 }}>
      <Container>
        <View style={{ flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: 'space-between', gap: 22 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontFamily: fonts.head, fontWeight: '700', fontSize: isMobile ? 28 : 38, color: colors.white, lineHeight: isMobile ? 34 : 44 }}>
              We will fight for you.
            </Text>
            <Text style={{ fontFamily: fonts.sans, fontSize: 16, color: 'rgba(255,255,255,0.92)', marginTop: 8 }}>
              Call today for a free consultation and let us stand up for you when it matters most.
            </Text>
          </View>
          <Button label={'Call ' + business.phone} size="lg" variant="dark" onPress={() => open(business.phoneHref)} />
        </View>
      </Container>
    </View>
  );
}

function FootLink({ label, block }) {
  const [h, setH] = React.useState(false);
  return (
    <Pressable onHoverIn={() => setH(true)} onHoverOut={() => setH(false)} style={{ marginBottom: block ? 9 : 0 }}>
      <Text style={{ fontFamily: fonts.sans, fontSize: 14, color: h ? colors.orange : '#9fb6c8', transitionDuration: '150ms' }}>
        {label}
      </Text>
    </Pressable>
  );
}

function FooterCol({ title, items }) {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontFamily: fonts.sans, fontWeight: '800', fontSize: 15, color: colors.white, marginBottom: 14, letterSpacing: 0.5 }}>
        {title}
      </Text>
      {items.map((i) => (
        <FootLink key={i} label={i} block />
      ))}
    </View>
  );
}

export default function Footer() {
  const { isMobile } = useResponsive();
  return (
    <View>
      <FinalCTA />
      <View style={{ backgroundColor: colors.navyDeep, paddingTop: isMobile ? 40 : 62, paddingBottom: 26 }}>
        <Container>
          <View style={{ flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 30 : 60 }}>
            <View style={{ flex: 1.4 }}>
              <Image source={require('../../assets/brand/logo.png')} style={{ width: 220, height: 61, marginBottom: 16, backgroundColor: colors.white, borderRadius: 8 }} resizeMode="contain" />
              <Text style={{ fontFamily: fonts.sans, fontSize: 14.5, lineHeight: 23, color: '#9fb6c8', maxWidth: 360 }}>
                {business.firm} {'\u2014'} fierce advocates for immigrants and families across
                California{'\u2019'}s Central Valley. Se habla espa{'\u00F1'}ol.
              </Text>
            </View>
            <FooterCol
              title="Practice Areas"
              items={['Immigration', 'Green Card / Adjustment', 'Spouse Visa', 'Deportation Defense', 'Naturalization', 'Asylum']}
            />
            <FooterCol title="Firm" items={['About Us', 'Case Results', 'Testimonials', 'Blog', 'Locations', 'Contact Us']} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontFamily: fonts.sans, fontWeight: '800', fontSize: 15, color: colors.white, marginBottom: 14, letterSpacing: 0.5 }}>
                Contact
              </Text>
              <Text style={{ fontFamily: fonts.sans, fontSize: 14.5, lineHeight: 23, color: '#9fb6c8' }}>
                {business.address}{'\n'}{business.cityState}
              </Text>
              <Pressable onPress={() => open(business.phoneHref)} style={{ marginTop: 14 }}>
                <Text style={{ fontFamily: fonts.head, fontWeight: '700', fontSize: 22, color: colors.orange }}>{business.phone}</Text>
              </Pressable>
              <Text style={{ fontFamily: fonts.sans, fontSize: 13.5, color: colors.gold, marginTop: 6, fontWeight: '700' }}>{business.hours}</Text>
            </View>
          </View>
          <View style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.12)', marginVertical: 26 }} />
          <View style={{ flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', gap: 10 }}>
            <Text style={{ fontFamily: fonts.sans, fontSize: 13, color: '#7c93a5' }}>
              {'\u00A9'} 2026 {business.name}. All Rights Reserved.
            </Text>
            <View style={{ flexDirection: 'row', gap: 22 }}>
              <FootLink label="Disclaimer" />
              <FootLink label="Privacy Policy" />
            </View>
          </View>
        </Container>
      </View>
    </View>
  );
}
