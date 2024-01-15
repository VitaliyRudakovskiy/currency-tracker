export type HistoryEntry = [
	string,
	string | number,
	string | number,
	string | number,
	string | number,
];

export type CurrencyHistoryData = [...HistoryEntry][];

const datesDropdown = (dropdownDates: CurrencyHistoryData) => {
	const subarraysWithoutFirst = dropdownDates.slice(1);
	return subarraysWithoutFirst.map((item) => item[0]);
};

export default datesDropdown;
