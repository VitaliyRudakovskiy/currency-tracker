import { DefaultTheme } from 'styled-components';

export const getRem =
	(key: string) =>
	({ theme }: DefaultTheme) =>
		theme.valueInRem[key];

export const getPx =
	(key: string) =>
	({ theme }: DefaultTheme) =>
		theme.valueInPx[key];

export const getValue =
	(key: string) =>
	({ theme }: DefaultTheme) =>
		theme[key];

export const getPercent =
	(key: string) =>
	({ theme }: DefaultTheme) =>
		theme.valueInPercent[key];

export const getZIndex =
	(key: string) =>
	({ theme }: DefaultTheme) =>
		theme.zIndex[key];

export const getFlex =
	(key: string) =>
	({ theme }: DefaultTheme) =>
		theme.flex[key];
