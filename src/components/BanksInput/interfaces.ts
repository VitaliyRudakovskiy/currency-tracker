interface IBank {
	bankName: string;
	coordinates: number[];
}

interface IBanksWithCurrencies extends IBank {
	currencies: string[];
}

interface BanksState {
	banksInputValue: string;
	banksWithCurrencies: IBanksWithCurrencies[];
}

export default BanksState;
