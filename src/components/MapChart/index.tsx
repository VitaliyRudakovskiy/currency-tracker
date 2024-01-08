import React, { useState } from 'react';
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
import { useSelector } from 'react-redux';
import {
	selectBanksInputValue,
	selectBanksWithCurrencies,
} from '@store/reducers/banksSlice';
import Loader from '@components/Loader';

export default function MapChart() {
	const [isMapLoaded, setIsMapLoaded] = useState(false);

	const banksWithCurrencies = useSelector(selectBanksWithCurrencies);
	const currencyInput = useSelector(selectBanksInputValue);

	const handleMapLoad = () => {
		setIsMapLoaded(true);
	};

	const filteredBanks =
		currencyInput === ''
			? banksWithCurrencies
			: banksWithCurrencies.filter((bank) =>
					bank.currencies.includes(currencyInput)
				);

	return (
		<YMaps
			query={{
				apikey: '67714e04-f605-40b9-a0a4-14a69b3ac94c',
			}}
		>
			<MapContainer
				style={{ display: 'flex', flexDirection: 'column', width: '100vw' }}
			>
				{!isMapLoaded && <Loader />}
				<Map
					defaultState={banksOptions}
					onLoad={handleMapLoad}
					width="95%"
					height="55vh"
				>
					<FullscreenControl />
					<TypeSelector options={{ float: 'right' }} />
					<ZoomControl options={{ float: 'right' }} />
					<Clusterer
						options={{
							preset: 'islands#greenClusterIcons',
							groupByCoordinates: false,
						}}
					>
						{filteredBanks.map((bank) => (
							<Placemark
								key={bank.coordinates[0]}
								geometry={bank.coordinates}
								properties={{
									iconCaption: bank.bankName,
								}}
							/>
						))}
					</Clusterer>
				</Map>
			</MapContainer>
		</YMaps>
	);
}
