import React, { PureComponent, ReactNode } from 'react';

import NotificationContainer from './styled';

interface NotificationProps {
	isShown: boolean;
	onHide: () => void;
}

class Notification extends PureComponent<NotificationProps> {
	notificationTimeoutRef: NodeJS.Timeout | null = null;

	componentDidUpdate() {
		const { isShown, onHide } = this.props;

		if (isShown === true) {
			if (this.notificationTimeoutRef) {
				clearTimeout(this.notificationTimeoutRef);
			}
			this.notificationTimeoutRef = setTimeout(() => {
				onHide();
			}, 2000);
		}
	}

	componentWillUnmount() {
		if (this.notificationTimeoutRef) {
			clearTimeout(this.notificationTimeoutRef);
		}
	}

	render(): ReactNode {
		const { isShown } = this.props;
		return (
			<NotificationContainer
				isShown={isShown}
				data-cy="notification"
				data-testid="notification"
			>
				{isShown && <p>The graph has been successfully created!</p>}
			</NotificationContainer>
		);
	}
}

export default Notification;
