interface IBank {
	bankName: string;
	coordinates: number[];
}

export const banks: IBank[] = [
	{ bankName: 'Альфа-банк', coordinates: [53.863795, 27.604046] },
	{ bankName: 'Альфа Банк', coordinates: [53.939339, 27.477711] },
	{ bankName: 'Беларусбанк', coordinates: [53.874366, 27.499389] },
	{ bankName: 'Беларусбанк', coordinates: [53.896424, 27.554668] },
	{ bankName: 'БСБ Банк', coordinates: [53.911025, 27.54065] },
	{ bankName: 'БТА Банк', coordinates: [53.921809, 27.567419] },
	{ bankName: 'МТБанк', coordinates: [53.907698, 27.436815] },
	{ bankName: 'МТБанк', coordinates: [53.84987, 27.648007] },
	{ bankName: 'ПаритетБанк', coordinates: [53.851327, 27.538105] },
	{ bankName: 'Приорбанк', coordinates: [53.92267, 27.558514] },
	{ bankName: 'Сбер Банк', coordinates: [53.905632, 27.539311] },
	{ bankName: 'Цептер Банк', coordinates: [53.904188, 27.58861] },
];

export const banksOptions = {
	center: [53.9, 27.5667],
	zoom: 11,
};
