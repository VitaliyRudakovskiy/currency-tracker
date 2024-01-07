import React from 'react';
import {
	YMaps,
	Map,
	Placemark,
	FullscreenControl,
	TypeSelector,
	ZoomControl,
	Clusterer,
} from 'react-yandex-maps';
import MapContainer from './styled';
import { banksOptions, banks } from '@constants/banks';
import { IBank } from '@interfaces/interfaces';

export default function MapChart() {
	const handleMarkerClick = (item: IBank) => {
		console.log(`Бал нажат маркер ${item.bankName}`);
	};

	return (
		<YMaps
			query={{
				apikey: '67714e04-f605-40b9-a0a4-14a69b3ac94c',
			}}
		>
			<MapContainer style={{ width: '100vw' }}>
				<Map defaultState={banksOptions} width="95%" height="55vh">
					<FullscreenControl />
					<TypeSelector options={{ float: 'right' }} />
					<ZoomControl options={{ float: 'right' }} />
					<Clusterer
						options={{
							preset: 'islands#greenClusterIcons',
							groupByCoordinates: false,
						}}
					>
						{banks.map((bank) => (
							<Placemark
								key={bank.coordinates[0]}
								geometry={bank.coordinates}
								onClick={() => handleMarkerClick(bank)}
							/>
						))}
					</Clusterer>
				</Map>
			</MapContainer>
		</YMaps>
	);
}
