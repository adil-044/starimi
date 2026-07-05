import React from 'react';
import { ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { loadWebFonts } from './src/loadFonts';
import { colors } from './src/theme';

import Header from './src/sections/Header';
import Hero from './src/sections/Hero';
import Pillars from './src/sections/Pillars';
import About from './src/sections/About';
import Practice from './src/sections/Practice';
import Results from './src/sections/Results';
import Testimonials from './src/sections/Testimonials';
import Areas from './src/sections/Areas';
import Footer from './src/sections/Footer';

loadWebFonts();

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.cream }}>
      <StatusBar style="light" />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ backgroundColor: colors.cream }} showsVerticalScrollIndicator={false}>
        <Header />
        <Hero />
        <Pillars />
        <About />
        <Practice />
        <Results />
        <Testimonials />
        <Areas />
        <Footer />
      </ScrollView>
    </View>
  );
}
