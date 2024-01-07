import React, { createContext, useContext, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, selectTheme } from '@store/reducers/themeSlice';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

interface IThemeContextProps {
	theme: 'dark' | 'light';
	toggleTheme: () => void;
}

interface IThemeProviderProps {
	children: ReactNode;
}

const ThemeContext = createContext<IThemeContextProps>({
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

	const themeValues: IThemeContextProps = {
		theme: currentTheme,
		toggleTheme: toggleThemeHandler,
	};

	return (
		<ThemeContext.Provider value={themeValues}>
			<StyledThemeProvider
				theme={currentTheme === 'dark' ? { mode: 'dark' } : { mode: 'light' }}
			>
				{children}
			</StyledThemeProvider>
		</ThemeContext.Provider>
	);
}

export default ThemeProvider;
