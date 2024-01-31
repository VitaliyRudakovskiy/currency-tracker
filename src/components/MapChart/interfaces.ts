interface IBank {
	bankName: string;
	coordinates: number[];
}

interface IBanksWithCurrencies extends IBank {
	currencies: string[];
}

export interface BanksState {
	banksInputValue: string;
	banksWithCurrencies: IBanksWithCurrencies[];
}

export interface MapChartState {
	isMapLoaded: boolean;
}

export interface ReduxState {
	banks: BanksState;
}
