import React, { ChangeEvent, PureComponent } from 'react';
import { connect } from 'react-redux';
import { selectBanksInputValue, setBanksInputValue } from '@store/reducers/banksSlice';
import getFilteredValues from '@utils/getFilteredValues';

import { BanksInputProps, ReduxState } from './interfaces';
import { MapInput, MapInputContainer, MapTooltip, MapTooltipsContainer } from './styled';

class BanksInput extends PureComponent<BanksInputProps> {
	handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		this.props.setBanksInputValue(e.target.value.toUpperCase());
	};

	handleButtonClick = (value: string) => () => {
		this.props.setBanksInputValue(value);
	};

	render() {
		const filteredValues = getFilteredValues(this.props.banksInput);

		return (
			<MapInputContainer>
				<MapInput data-cy="banks-input" type="text" placeholder="Input currency to search for" value={this.props.banksInput} onChange={this.handleChange} />
				<MapTooltipsContainer>
					{filteredValues.map((value) => (
						<MapTooltip data-cy="banks-button" key={value} onClick={this.handleButtonClick(value)}>
							{value}
						</MapTooltip>
					))}
				</MapTooltipsContainer>
			</MapInputContainer>
		);
	}
}

const mapStateToProps = (state: ReduxState) => ({
	banksInput: selectBanksInputValue(state),
});

const mapDispatchToProps = { setBanksInputValue };

export default connect(mapStateToProps, mapDispatchToProps)(BanksInput);
