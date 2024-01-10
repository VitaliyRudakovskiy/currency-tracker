import React, { PureComponent } from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { banksOptions } from '@constants/banks';
import {
	selectBanksInputValue,
	selectBanksWithCurrencies,
} from '@store/reducers/banksSlice';
import Loader from '@components/Loader';
import {
	YMaps,
	Map,
	Placemark,
	FullscreenControl,
	TypeSelector,
	ZoomControl,
	Clusterer,
} from 'react-yandex-maps';
import { IBankWithCurrency } from '@utils/bindCurrenciesToBanks';
import { BanksState } from '@interfaces/interfaces';
import MapContainer from './styled';

interface MapChartState {
	isMapLoaded: boolean;
}

interface ReduxState {
	banks: BanksState;
}

const mapStateToProps = (state: ReduxState) => ({
	banksWithCurrencies: selectBanksWithCurrencies(state),
	currencyInput: selectBanksInputValue(state),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

class MapChart extends PureComponent<PropsFromRedux, MapChartState> {
	constructor(props: PropsFromRedux) {
		super(props);
		this.state = {
			isMapLoaded: false,
		};
	}

	handleMapLoad = () => {
		this.setState({ isMapLoaded: true });
	};

	render() {
		const { banksWithCurrencies, currencyInput } = this.props;
		const { isMapLoaded } = this.state;

		const filteredBanks: IBankWithCurrency[] =
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
				<MapContainer>
					{!isMapLoaded && <Loader />}
					<Map
						data-cy="map"
						defaultState={banksOptions}
						onLoad={this.handleMapLoad}
						width="100%"
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
}

export default connect(mapStateToProps)(MapChart);
