import { Platform } from 'react-native';

const color1 = "#F4F6F8"
const color2 = "#2E7D32"
const color3 = "#1565C0"
const colorcard = "#FFFFFF"
const textcolor = "#1c1c1c"
const textalt = "#6B7280"
const textalt2 = "#C62828"

export const Colors = {
    text: textcolor,
    background: color1,
    secondary: color2,
    card: colorcard,
    textSecondary: textalt,
};

export const Spacing = {
  sm:8,
  md:16,
  lg:24,
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
