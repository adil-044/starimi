import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { colors, fonts, radius, shadow, business } from '../theme';
import { Container, Button, useResponsive, open } from '../ui';

function Field({ label, value, onChangeText, keyboardType, multiline }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <View style={{ marginBottom: 14 }}>
      <Text style={{ fontFamily: fonts.sans, fontWeight: '700', fontSize: 13, color: colors.slate, marginBottom: 6 }}>
        {label}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        multiline={multiline}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholderTextColor="#9fb0bd"
        style={{
          fontFamily: fonts.sans,
          fontSize: 15,
          color: colors.ink,
          backgroundColor: colors.white,
          borderWidth: 1.5,
          borderColor: focus ? colors.orange : colors.line,
          borderRadius: radius.sm,
          paddingHorizontal: 14,
          paddingVertical: 12,
          minHeight: multiline ? 92 : 46,
          outlineStyle: 'none',
          transitionDuration: '150ms',
        }}
      />
    </View>
  );
}

function LeadForm() {
  const [f, setF] = React.useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = React.useState(false);
  const set = (k) => (v) => setF((s) => ({ ...s, [k]: v }));
  return (
    <View
      style={[
        { backgroundColor: colors.white, borderRadius: radius.lg, padding: 26, width: '100%', maxWidth: 420 },
        shadow.card,
      ]}>
      <Text style={{ fontFamily: fonts.head, fontWeight: '700', fontSize: 24, color: colors.navy }}>
        Get a Free Consultation
      </Text>
      <Text style={{ fontFamily: fonts.sans, fontSize: 14, color: colors.slate, marginTop: 6, marginBottom: 18 }}>
        Fill out the form and we will get back to you soon.
      </Text>
      {sent ? (
        <View style={{ paddingVertical: 26, alignItems: 'center' }}>
          <Text style={{ fontFamily: fonts.head, fontSize: 20, color: colors.orange, fontWeight: '700' }}>
            Thank you!
          </Text>
          <Text style={{ fontFamily: fonts.sans, fontSize: 14, color: colors.slate, marginTop: 8, textAlign: 'center' }}>
            Your request has been received. Our team will contact you shortly.
          </Text>
        </View>
      ) : (
        <View>
          <Field label="Name (Required)" value={f.name} onChangeText={set('name')} />
          <Field label="Phone" value={f.phone} onChangeText={set('phone')} keyboardType="phone-pad" />
          <Field label="Email" value={f.email} onChangeText={set('email')} keyboardType="email-address" />
          <Field label="Message" value={f.message} onChangeText={set('message')} multiline />
          <Button label="Request My Consultation" onPress={() => setSent(true)} style={{ marginTop: 4 }} />
          <Pressable onPress={() => open(business.phoneHref)} style={{ marginTop: 14, alignItems: 'center' }}>
            <Text style={{ fontFamily: fonts.sans, fontSize: 13.5, color: colors.slate }}>
              Prefer to talk now? Call{' '}
              <Text style={{ color: colors.orangeDark, fontWeight: '800' }}>{business.phone}</Text>
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

export default function Hero() {
  const { isMobile } = useResponsive();
  return (
    <View style={{ backgroundColor: colors.navy, position: 'relative', overflow: 'hidden' }}>
      <View style={{ position: 'absolute', top: -120, right: -90, width: 360, height: 360, borderRadius: 999, backgroundColor: colors.navySoft, opacity: 0.5 }} />
      <View style={{ position: 'absolute', bottom: -140, left: -120, width: 320, height: 320, borderRadius: 999, backgroundColor: colors.orange, opacity: 0.12 }} />
      <Container style={{ paddingVertical: isMobile ? 46 : 78 }}>
        <View
          style={{
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'stretch' : 'center',
            gap: isMobile ? 34 : 54,
          }}>
          <View style={{ flex: 1 }}>
            <View
              style={{
                alignSelf: 'flex-start',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
                backgroundColor: 'rgba(240,120,48,0.16)',
                borderColor: 'rgba(240,120,48,0.5)',
                borderWidth: 1,
                paddingHorizontal: 14,
                paddingVertical: 7,
                borderRadius: 999,
                marginBottom: 22,
              }}>
              <View style={{ width: 7, height: 7, borderRadius: 4, backgroundColor: colors.orange }} />
              <Text style={{ fontFamily: fonts.sans, fontWeight: '700', fontSize: 12.5, letterSpacing: 1.5, color: colors.orangeSoft, textTransform: 'uppercase' }}>
                Licensed California Immigration Attorney
              </Text>
            </View>
            <Text
              style={{
                fontFamily: fonts.head,
                fontWeight: '600',
                color: colors.white,
                fontSize: isMobile ? 42 : 62,
                lineHeight: isMobile ? 46 : 66,
                letterSpacing: -0.5,
              }}>
              A Serious Attorney for{'\n'}
              <Text style={{ color: colors.orange }}>Serious Problems</Text>
            </Text>
            <Text
              style={{
                fontFamily: fonts.sans,
                fontSize: isMobile ? 16 : 18,
                lineHeight: isMobile ? 26 : 30,
                color: '#c7d6e2',
                marginTop: 20,
                maxWidth: 540,
              }}>
              Need help with your legal status or applying for citizenship? Our dedicated
              legal team is ready to fight for you and your family {'\u2014'} 24 hours a day.
            </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 14, marginTop: 30 }}>
              <Button label="Call An Attorney Now" size="lg" onPress={() => open(business.phoneHref)} />
              <Button label="Our Practice Areas" size="lg" variant="ghost" onPress={() => {}} />
            </View>
            <Text style={{ fontFamily: fonts.sans, color: '#9fb6c8', marginTop: 22, fontSize: 14 }}>
              Call our law firm at{' '}
              <Text style={{ color: colors.white, fontWeight: '800' }}>{business.phone}</Text> {'\u2014'} {business.hours}
            </Text>
          </View>
          {!isMobile && <LeadForm />}
        </View>
        {isMobile && (
          <View style={{ marginTop: 30, alignItems: 'center' }}>
            <LeadForm />
          </View>
        )}
      </Container>
    </View>
  );
}
