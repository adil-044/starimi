import { Platform } from 'react-native';

// On web we load Google Fonts + a small CSS reset by injecting into <head>.
export function loadWebFonts() {
  if (Platform.OS !== 'web' || typeof document === 'undefined') return;
  if (document.getElementById('sil-fonts')) return;

  const pre1 = document.createElement('link');
  pre1.rel = 'preconnect';
  pre1.href = 'https://fonts.googleapis.com';
  const pre2 = document.createElement('link');
  pre2.rel = 'preconnect';
  pre2.href = 'https://fonts.gstatic.com';
  pre2.crossOrigin = 'anonymous';

  const link = document.createElement('link');
  link.id = 'sil-fonts';
  link.rel = 'stylesheet';
  link.href =
    'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700;800&display=swap';

  const style = document.createElement('style');
  style.innerHTML = [
    'html, body, #root { margin:0; padding:0; height:100%; background:#fbf7f1; }',
    '* { box-sizing:border-box; }',
    'body { -webkit-font-smoothing:antialiased; text-rendering:optimizeLegibility; }',
    'a { text-decoration:none; }',
    '::selection { background:#f07830; color:#fff; }',
  ].join('\n');

  document.head.appendChild(pre1);
  document.head.appendChild(pre2);
  document.head.appendChild(link);
  document.head.appendChild(style);
  document.title =
    'Star Immigration & Citizenship Lawyers of Fresno \u2014 Free Consultation';
}
