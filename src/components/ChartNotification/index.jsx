import React, { Component } from 'react';

import { chartObserver } from '@components/ChartObserver';

import { NotificationWrapper } from './styled';

class ChartNotification extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showNotification: false,
		};
	}

	componentDidMount() {
		chartObserver.addObserver(this);
	}

	componentWillUnmount() {
		chartObserver.removeObserver(this);
	}

	update() {
		this.setState({ showNotification: true });
		setTimeout(() => {
			this.setState({ showNotification: false });
		}, 500);
	}

	render() {
		const { showNotification } = this.state;

		return (
			<NotificationWrapper show={showNotification}>
				The graph has been successfully build!
			</NotificationWrapper>
		);
	}
}

export default ChartNotification;
