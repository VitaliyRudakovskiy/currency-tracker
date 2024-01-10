module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['./jest.setup.js'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	moduleDirectories: ['node_modules', 'src'],
	testPathIgnorePatterns: ['/node_modules/'],
	testMatch: ['<rootDir>/__tests__/**/*.test.[tj]s?(x)'],
	transform: {
		'^.+\\.(ts|tsx)?$': 'ts-jest',
		'^.+\\.(js|jsx)$': 'babel-jest',
	},
	moduleNameMapper: {
		'/\\.(jpg|jpeg|png|svg)$': '<rootDir>/__mocks__/mockData.js',
		'^@components(.*)$': '<rootDir>/src/components$1',
		'^@constants(.*)$': '<rootDir>/src/constants$1',
		'^@interfaces(.*)$': '<rootDir>/src/interfaces$1',
		'^@pages(.*)$': '<rootDir>/src/pages$1',
		'^@providers(.*)$': '<rootDir>/src/providers$1',
		'^@store(.*)$': '<rootDir>/src/store$1',
		'^@utils(.*)$': '<rootDir>/src/utils$1',
	},
};
