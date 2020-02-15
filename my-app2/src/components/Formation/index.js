// @flow
import React, {Fragment} from 'react';
import {compose, withProps} from 'recompose';

import css from './styles.css';

import {generateFormation} from '../../utils';

import Pacman from '../Pacman';

const Formation = ({formation}) => {
    console.log({formation});

    return (
        <div className="formation">
            {formation.map(row => (
                <div className="row">
                    {row.map(direction => (
                        <Pacman direction={direction} />
                    ))}
                </div>
            ))}
        </div>
    )
};

const enhance = compose(
    withProps(() => (
        {
            formation: generateFormation({nRows: 11, maxItemsPerRow: 11}),
        }),
    ),
);

export default enhance(Formation);
