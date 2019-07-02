'use strict';

import * as React from 'react';

import './header.scss';

import { INav } from '@Interfaces';
import Link from 'next/link';

class Nav extends React.Component<INav.IProps, INav.IState> {
	constructor (props:INav.IProps) {
		super(props);

		this.state = {
			isMenuOpen: false
		}

		this.onMenuToggle = this.onMenuToggle.bind(this)
	}

	onMenuToggle () {
		this.setState(({ isMenuOpen }) => ({ isMenuOpen: !isMenuOpen }))
    }
    
    public render(): JSX.Element {
		const { isMenuOpen } = this.state;

        return (
            <section>
				<div
					className={`w-100`}
					style={{
						height: isMenuOpen ? '200px': '0',
						overflowY: 'hidden',
						transition: 'height 0.5s ease'
					}}
					id="navbarToggleExternalContent"
				>
					<div className="bg-dark p-4">
						<h5 className="text-white text-center h5 mb-4">Menu</h5>
							<section className="nav mr-auto">
                                <Link href="/courses">
                                    <a className="nav-link nav-link-bg text-light mb-1 text-center w-100">
                                        <i className="fa fa-book mr-2"></i>
                                        All courses
                                    </a>
                                </Link>
                                <Link href="/profile">
                                    <a className="nav-link nav-link-bg text-light text-center w-100">
                                        <i className="fa fa-user mr-2"></i>
                                        My profile
                                    </a>
                                </Link>
							</section>
					</div>
				</div>

				<section className="container">
					<div className="row">
						<nav className={'navbar navbar-light w-100 bg-white mb-4 d-flex'}>
							<span className={'navbar-brand mb-0'} style={{ flex:3 }}>
								<img className={'img'} width={50} src={'/static/img/splashLogo.webp'} alt=""/>
							</span>
							<button onClick={this.onMenuToggle} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
						</nav>
					</div>
				</section>
            </section>
        )
    }
}

export { Nav };