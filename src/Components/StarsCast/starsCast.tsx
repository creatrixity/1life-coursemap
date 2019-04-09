'use strict';

import * as React from 'react';

import { StarIcon } from '@Components/Icons';

const MAX_STARS:number = 5;

type StarsCast = {
  progression?: number;
}

/**
 * Stars Cast 
 */
const starsCast:React.SFC<StarsCast> = (props) => {
  const { progression } = props;
  const filledStarsCount = Math.floor(((progression || 0) / 100) * MAX_STARS)
  const stars = [];

  for (let i = 0; i < filledStarsCount; i++) {
    stars.push(<StarIcon fill={'yellow'} />)
  }

  for (let i = 0; i < (MAX_STARS - filledStarsCount); i++) {
    stars.push(<StarIcon/>)
  }

  return (
    <div className={'d-flex align-items-center'}>
      {
        stars.map((star: any, key:number) => {
          return (
            <React.Fragment key={key}>
              {star}
            </React.Fragment>
          )
        })
      }
    </div>
  )
}

starsCast.defaultProps = {
  progression: 0
}

export default starsCast;