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

export interface BanksInputProps {
	banksInput: string;
	setBanksInputValue: (value: string) => void;
}

export interface ReduxState {
	banks: BanksState;
}
