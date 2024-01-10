import React, { PureComponent, ReactNode, createContext } from 'react';
import { ChartSubjectInterface } from '@interfaces/interfaces';
import ChartSubject from './ChartSubject';

interface ChartDataContextProps {
	children: ReactNode;
}

export const ChartDataContext = createContext<
	ChartSubjectInterface | undefined
>(undefined);

class ChartDataProvider extends PureComponent<ChartDataContextProps> {
	chartSubject = new ChartSubject();

	render() {
		return (
			<ChartDataContext.Provider value={this.chartSubject}>
				{this.props.children}
			</ChartDataContext.Provider>
		);
	}
}

export default ChartDataProvider;
