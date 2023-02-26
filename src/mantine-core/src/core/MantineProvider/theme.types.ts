import type { DeepPartial } from '../utils';

export interface MantineTheme {
  /** Text direction, rtl – right to left, ltr – left to right, ltr by default */
  dir: 'ltr' | 'rtl';

  /** Controls focus ring styles. Supports the following options:
   * - `auto` – display focus ring only when user navigates with keyboard (default value)
   * - `always` – display focus ring when user navigates with keyboard and mouse
   * - `never` – focus ring is always hidden (not recommended)
   */
  focusRing: 'auto' | 'always' | 'never';

  /** Determines whether font-smoothing property should be set on body, true by default */
  fontSmoothing: boolean;

  /** Determines which loader will be used in all components that reference `Loader` component, `oval` by default */
  loader: MantineLoaderType;

  /** White color, used with `light` color scheme */
  white: string;

  /** Black color, used with `light` color scheme */
  black: string;

  /** Object of colors, key is color name, value is an array of 10 strings (colors) */
  colors: MantineThemeColors;

  /** Index of theme.colors[color].
   * Primary shade is used in all components to determine which color from theme.colors[color] should be used.
   * Can be either a number (0–9) or an object to specify different color shades for light and dark color schemes.
   * Default value `{ light: 6, dark: 8 }`
   *
   * @example
   * { primaryShade: 6 } // shade 6 is used both for dark and light color schemes
   * { primaryShade: { light: 6, dark: 7 } } // different shades for dark and light color schemes
   * */
  primaryShade: MantineColorShade | MantinePrimaryShade;

  /** Key of theme.colors, hex/rgb/hsl values are not supported.
   * Determines which color will be used in all components by default.
   * Default value – `blue`
   * */
  primaryColor: string;

  /** font-family used in all components, system fonts by default */
  fontFamily: string;

  /** Monospace font-family, used in code and other similar components, system fonts by default  */
  fontFamilyMonospace: string;

  /** Controls various styles of h1-h6 elements, used in TypographyStylesProvider and Title components */
  headings: {
    fontFamily: string;
    fontWeight: string;
    sizes: {
      h1: HeadingStyle;
      h2: HeadingStyle;
      h3: HeadingStyle;
      h4: HeadingStyle;
      h5: HeadingStyle;
      h6: HeadingStyle;
    };
  };

  /** Base line-height used in all typography components, `1.55` by default */
  lineHeight: string;

  /** Object of values that are used to set border-radius in all components that support it */
  radius: MantineRadiusValues;

  /** Key of theme.radius. Default border-radius used by most components */
  defaultRadius: MantineRadius;

  /** Object of values that are used to set various CSS properties that control spacing between elements */
  spacing: MantineSpacingValues;

  /** Object of values that are used to control font-size property in all components */
  fontSizes: MantineFontSizesValues;

  /** Object of values that are used to control breakpoints in all components, values are expected to be defined in em */
  breakpoints: MantineBreakpointsValues;

  /** Object of values that are used to add box-shadow styles to components that support shadow prop */
  shadows: MantineShadowsValues;

  /** Determines whether user OS settings to reduce motion should be respected, true by default */
  respectReducedMotion: boolean;

  /** Determines which cursor type will be used for interactive elements
   * - `default` – cursor that is used by native HTML elements, for example, `input[type="checkbox"]` has `cursor: default` styles (default option)
   * - `pointer` – sets `cursor: pointer` on interactive elements that do not have these styles by default
   */
  cursorType: 'default' | 'pointer';

  /** Controls gradient that will be used by components that support `variant="gradient"` */
  defaultGradient: MantineGradient;

  /** Allows to add `classNames`, `styles` and `defaultProps` to any component */
  components: MantineThemeComponents;

  /** Any other properties that you want to access with theme objects */
  other: MantineThemeOther;
}

export type MantineColorScheme = 'light' | 'dark' | 'auto';

export type MantineThemeOverride = DeepPartial<MantineTheme>;

export type MantineStylesRecord = Record<string, React.CSSProperties>;

export interface MantineThemeComponent {
  classNames?: Record<string, string>;
  styles?: MantineStylesRecord | ((theme: MantineTheme) => MantineStylesRecord);
  defaultProps?: Record<string, any> | ((theme: MantineTheme) => Record<string, any>);
}

export type MantineThemeComponents = Record<string, MantineThemeComponent>;

export interface HeadingStyle {
  fontSize: string;
  fontWeight?: string;
  lineHeight: string;
}

export type MantineSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type MantineBreakpointsValues = Record<MantineSize, string>;
export type MantineFontSizesValues = Record<MantineSize, string>;
export type MantineRadiusValues = Record<MantineSize, string>;
export type MantineSpacingValues = Record<MantineSize, string>;
export type MantineShadowsValues = Record<MantineSize, string>;

export type MantineBreakpoint = keyof MantineBreakpointsValues;
export type MantineFontSize = keyof MantineFontSizesValues;
export type MantineRadius = keyof MantineRadiusValues;
export type MantineSpacing = keyof MantineSpacingValues;
export type MantineShadow = keyof MantineShadowsValues;

export type MantineThemeOther = Record<string, any>;

export interface MantineGradient {
  from: string;
  to: string;
  deg?: number;
}

export type MantineColorsTuple = readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];

export type MantineColorShade = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type MantineLoaderType = 'bars' | 'oval' | 'dots' | (string & {});

export interface MantinePrimaryShade {
  light: MantineColorShade;
  dark: MantineColorShade;
}

export type DefaultMantineColor =
  | 'dark'
  | 'gray'
  | 'red'
  | 'pink'
  | 'grape'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'green'
  | 'lime'
  | 'yellow'
  | 'orange'
  | 'teal'
  | (string & {});

export type MantineThemeColorsOverride = {};

export type MantineThemeColors = MantineThemeColorsOverride extends {
  colors: Record<infer CustomColors, MantineColorsTuple>;
}
  ? Record<CustomColors, MantineColorsTuple>
  : Record<DefaultMantineColor, MantineColorsTuple>;

export type MantineColor = keyof MantineThemeColors;