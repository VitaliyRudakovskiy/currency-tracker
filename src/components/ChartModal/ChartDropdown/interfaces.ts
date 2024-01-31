type HistoryEntry = [string, string | number, string | number, string | number, string | number];

export type CurrencyHistoryData = [...HistoryEntry][];

export interface IFormData {
	[key: string]: string;
	newHighRate: string;
	newLowRate: string;
	newOpenRate: string;
	newCloseRate: string;
}

export interface IChartDropdownProps {
	selectedDate: string;
	setSelectedData: (data: string) => void;
	data: CurrencyHistoryData;
	setFormData: (data: IFormData) => void;
}
