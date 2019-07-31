'use strict';

import * as React from 'react';

import { ArrowRightIcon } from '@Components/Icons';
import Link from 'next/link';

type ListingsCardProps = {
  actionBtnTitle: string,
  actionBtnHref: string,
  isActive?: boolean,
  title: string,
  subtitle: string
}

export const ListingsCard:React.FC<ListingsCardProps> = ({
  actionBtnTitle,
  actionBtnHref,
  isActive = false,
  title,
  subtitle
}) => {
  return (
    <div className={`text-center card coursemap-listing ${isActive ? 'coursemap-listing--active': ''}`}>
      <section className="d-flex flex-column align-items-center">
        {!isActive && <img src="/static/img/lock.svg" className="coursemap-listing__icon" alt="Lock icon"/>}
        <h3 className={'h4 coursemap-listing__title mb-3'}>{title}</h3>

        <p className="font-style-italic coursemap-listing__subtext text-gray mb-4">
          {subtitle}
        </p>

        {isActive &&
        <Link href={actionBtnHref}>
          <button className="btn btn-success coursemap-listing__btn">
            <span className={'mr-2'}>{actionBtnTitle}</span>
            <ArrowRightIcon />
          </button>
        </Link>
        }
      </section>
    </div>
  )
}