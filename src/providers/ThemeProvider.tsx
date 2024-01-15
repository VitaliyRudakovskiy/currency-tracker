import React, { createContext, ReactNode, useContext, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { darkTheme, lightTheme } from '@constants/theme';
import { selectTheme, toggleTheme } from '@store/reducers/themeSlice';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

interface IThemeContextProps {
	theme: 'dark' | 'light';
	toggleTheme: () => void;
}

interface IThemeProviderProps {
	children: ReactNode;
}

export const ThemeContext = createContext<IThemeContextProps>({
	theme: 'dark',
	toggleTheme: () => {},
});

export function useTheme() {
	return useContext<IThemeContextProps>(ThemeContext);
}

function ThemeProvider({ children }: IThemeProviderProps) {
	const dispatch = useDispatch();
	const currentTheme = useSelector(selectTheme);

	const toggleThemeHandler = () => {
		dispatch(toggleTheme());
	};

	const themeValues: IThemeContextProps = useMemo(
		() => ({
			theme: currentTheme,
			toggleTheme: toggleThemeHandler,
		}),
		[currentTheme]
	);

	const themeMode = currentTheme === 'dark' ? darkTheme : lightTheme;

	return (
		<ThemeContext.Provider value={themeValues}>
			<StyledThemeProvider theme={themeMode}>{children}</StyledThemeProvider>
		</ThemeContext.Provider>
	);
}

export default ThemeProvider;
