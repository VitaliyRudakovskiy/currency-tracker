import React, { PureComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Clusterer, FullscreenControl, Map, Placemark, TypeSelector, YMaps, ZoomControl } from 'react-yandex-maps';
import Loader from '@components/Loader';
import { banksOptions } from '@constants/banks';
import { selectBanksInputValue, selectBanksWithCurrencies } from '@store/reducers/banksSlice';
import filterBanks from '@utils/filterBanks';

import { MapChartState, ReduxState } from './interfaces';
import MapContainer from './styled';

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

		const filteredBanks = filterBanks(banksWithCurrencies, currencyInput);

		return (
			<YMaps
				query={{
					apikey: process.env.YANDEX_MAPS_API_KEY,
				}}
			>
				<MapContainer>
					{!isMapLoaded && <Loader />}
					<Map data-cy="map" defaultState={banksOptions} onLoad={this.handleMapLoad} width="100%" height="55vh">
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
