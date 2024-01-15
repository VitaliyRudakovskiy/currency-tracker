interface Ivalue {
	[code: string]: string | number;
}

interface Itheme {
	[code: string]: string | Ivalue;
}

const baseTheme: Itheme = {
	valueInRem: {
		rem0: '0',
		rem0_2: '0.2rem',
		rem0_3: '0.3rem',
		rem0_35: '0.35rem',
		rem0_4: '0.4rem',
		rem0_5: '0.5rem',
		rem0_6: '0.6rem',
		rem0_7: '0.7rem',
		rem0_8: '0.8rem',
		rem0_9: '0.9rem',
		rem1: '1rem',
		rem1_05: '1.05rem',
		rem1_1: '1.1rem',
		rem1_2: '1.2rem',
		rem1_25: '1.25rem',
		rem1_3: '1.3rem',
		rem1_4: '1.4rem',
		rem1_5: '1.5rem',
		rem2: '2rem',
		rem2_5: '2.5rem',
		rem3: '3rem',
		rem4: '4rem',
		rem6: '6rem',
		rem6_5: '6.5rem',
		rem9: '9rem',
		rem11: '11rem',
		rem13: '13rem',
		rem15: '15rem',
		rem30: '30rem',
		rem40: '40rem',
		rem70: '70rem',
	},

	valueInPx: {
		px1: '1px',
		px4: '4px',
		px5: '5px',
		px6: '6px',
		px8: '8px',
		px10: '10px',
		px20: '20px',
		px30: '30px',
		px40: '40px',
		px60: '60px',
		px64: '64px',
		px80: '80px',
		px170: '170px',
		px280: '280px',
		px380: '380px',
		px464: '464px',
		px510: '510px',
		px528: '528px',
		px728: '728px',
		px768: '768px',
		px810: '810px',
		px1010: '1010px',
	},

	valueInPercent: {
		'w-full': '100%',
		perc10: '10%',
		perc40: '40%',
		perc50: '50%',
		perc70: '70%',
		vh95: '95vh',
		vw5: '5vw',
		vw80: '80vw',
		vw100: '100vw',
		vh100: '10vh',
	},

	zIndex: {
		z2: 2,
		z10: 10,
		z100: 100,
	},

	chartRisingColor: '#a52714',
	chartFallingColor: '#0f9d58',
	chartLineColor: '#808080',

	chartButtonBackgroundColor: '#4caf50',
	chartButtonTextColor: '#fff',
	chartButtonHoverColor: '#45a049',
	chartButtonActiveColor: '#3c943e',
	modalInputHoverColor: '#00bcd480',
	modalInputHoverBorderColor: '#00bcd4',
	navItemClickColor: '#268e00',
	navItemHoverColor: '#00ff00',
	pulseCircleColor: '#00bc4f',
	footerTitleColor: '#a3dc00',
	footerListValueColor: '#898989',
	footerCopyrightColor: '#898989',

	defaultTransition: 'all 0.3s ease',

	flex: {
		center: 'display: flex; align-items: center; justify-content: center;',
		between:
			'display: flex; align-items: center; justify-content: space-between;',
	},
};

export const darkTheme: Itheme = {
	...baseTheme,

	primaryBackground: '#040404',
	mainTextColor: '#f4f4f4',

	navbarBackground: '#040404',
	currencyItemBackground: '#202025',
	currencyItemTextColor: '#d9d9d9',
	modalBackground: '#28292c',
	modalElementBackground: '#202025',
	spinnerColor: '#d9d9d9',
	toggleBackground: '#28292c',
	toggleSliderColor: '#d8dbe0',
	welcomeBackground: 'radial-gradient(circle at center, #004400, #000000)',
	welcomeQuote: '#d9d9d9',
};

export const lightTheme: Itheme = {
	...baseTheme,

	primaryBackground: '#f4fff4',
	mainTextColor: '#040404',

	navbarBackground: '#ffffff',
	currencyItemBackground: '#eeeeee',
	currencyItemTextColor: '#040404',
	modalBackground: '#f0f0f0',
	modalElementBackground: '#cccccc',
	spinnerColor: '#28292c',
	toggleBackground: '#f0f0f0',
	toggleSliderColor: '#d8dbe0',
	welcomeBackground: '#f4fff4',
	welcomeQuote: '#090909',
};
