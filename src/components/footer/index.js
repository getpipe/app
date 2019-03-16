
import React, { Component } from "react";
import "./style.css";
import { withNaming } from '@bem-react/classname';

const cn = withNaming({ e: '__', m: '_' });
const cnFooter = cn('Footer');

class Footer extends Component {
	render() {
		return (
			<div className={cnFooter({ size: 's' })}>
				<div className={cnFooter('copyright', { size: 's' })}>
				</div>
			</div>
		);
	}
}

export default Footer;






