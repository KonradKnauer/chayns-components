import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import Input from '../../react-chayns-input/component/Input';

const CLOSE = 1;

const OPEN = 2;

export default class AccordionSearch extends Component {
    static propTypes = {
        onSearch: PropTypes.func.isRequired,
        currentState: PropTypes.number.isRequired,
        searchPlaceholder: PropTypes.string,
    };

    static defaultProps = {
        searchPlaceholder: '',
    };

    constructor(props) {
        super(props);
        this.state = { noWidth: props.currentState === CLOSE };
    }

    componentDidMount() {
        this.ref.addEventListener('transitionend', (event) => {
            if (event.propertyName === 'transform' && !event.target.classList.contains('accordion__head__right__search--active')) {
                this.setState({ noWidth: true });
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        const { currentState } = this.props;
        if(nextProps.currentState === OPEN && currentState === CLOSE) {
            this.setState({ noWidth: false });
        }
    }

    render() {
        const { onSearch, currentState, searchPlaceholder } = this.props;
        const { noWidth } = this.state;

        return (
            <Input
                className={classNames('accordion__head__right__search', {
                    'accordion__head__right__search--active': currentState === OPEN,
                })}
                placeholder={searchPlaceholder}
                onChange={onSearch}
                icon={faSearch}
                style={{ width: noWidth ? '0' : 'auto' }}
                wrapperRef={ref => this.ref = ref}
                dynamic
            />
        );
    }
}