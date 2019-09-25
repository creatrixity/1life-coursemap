'use strict';

import * as React from 'react';

import './header.scss';

import { IHeader } from '@Interfaces';
import { ArrowLeftIcon } from '@Components';
import Link from 'next/link';

const styles: any = {
  Header: {
    position: 'fixed',
    top: 0,
    zIndex: 900,
    width: '100%'
  }
};

class Header extends React.Component<IHeader.IProps, IHeader.IState> {
  public render(): JSX.Element {
    const { backlinkHref, title } = this.props;

    return (
      <div
        className={'module-bar module-bar--lesson d-flex align-items-center'}
        style={{ ...styles.Header, ...this.props.style }}
      >
        <section className={'container d-flex align-items-center'}>
          <section className={'d-inline-block col-2'}>
            <div className={'d-flex align-items-center'}>
              <Link href={backlinkHref.link} as={backlinkHref.as}>
                <a className={'btn btn-outline'}>
                  <ArrowLeftIcon width={'20'} height={'20'} />
                </a>
              </Link>
            </div>
          </section>

          <section className={'d-inline-block col-10'}>
            <div className={'d-flex justify-content-center'}>
              <section className={'module-bar__title col-xs-8 mr-2'}>
                {title}
              </section>
              {this.props.children}
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export { Header };
