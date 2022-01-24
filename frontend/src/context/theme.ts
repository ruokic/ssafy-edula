import { createContext } from 'react';
import theme from '../styles/theme';

const defaultTheme = theme.base;

const ThemeContext = createContext({
	theme: defaultTheme,
	changeTheme: (themename: string) => {},
});

export default ThemeContext;
