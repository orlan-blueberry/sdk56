// Ambient types for CSS imports (NativeWind / react-native-css).
// Lets `tsc` resolve `import styles from './x.module.css'` and side-effect
// `import '@/global.css'` instead of erroring with TS2307 / TS2882.

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.css';
