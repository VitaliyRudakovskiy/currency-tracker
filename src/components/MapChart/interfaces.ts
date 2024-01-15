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
