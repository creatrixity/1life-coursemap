'use strict';

import * as React from 'react';
import { LoadSpinner } from '@Components';

type LoaderScreenProps = {
  caption?: string,
  spinnerColor?: string
}

export const LoaderScreen:React.FC<LoaderScreenProps> = ({
  caption = 'Fetching...',
  spinnerColor = '#77B02A'
}) => {
  return (
    <div className={'d-flex justify-content-center w-100'}>
      <section className={'d-flex flex-column align-items-center'}>
        <LoadSpinner width={'60px'} height={'60px'} color={spinnerColor} />
        <b className={'mt-3 text-brand'}>{caption}</b>
      </section>
    </div>
  )
}