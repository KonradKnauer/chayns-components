import React from 'react';

import { TextString } from '../../src/index';

export default class Example extends React.Component {
    constructor() {
        super();

        this.state = {
            txt: 'txt_rating_admin_stats_yesterday'
        };
    }

    componentDidMount() {
        window.setTimeout(() => {
            this.setState({
                txt: 'txt_rating_average_emojis'
            });
        }, 5000)
    }

    render() {
        return(
            <TextString
                textString={this.state.txt}
                replace={{
                    '##feedback_count##': 1
                }}
                renderHtml
            />
        );
    }
}
