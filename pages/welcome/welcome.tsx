import * as React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators, Dispatch } from 'redux';
import Head from 'next/head';
import Link from 'next/link';

import { IHomePage, IStore } from '@Interfaces';
import { getToken } from '@Redux/utils';

import ReactPlayer from 'react-player';

import './welcome.scss';

export class WelcomePage extends React.Component<IHomePage.IProps, IHomePage.IState> {
	componentDidMount () {
		if (!getToken()) return this.props.router.push('/login')
	}

	public render(): JSX.Element {
		return (
			<div className="d-flex flex-column welcome pt-4">
				<Head>
					<title>Welcome 1Lifer! | 1Life</title>
				</Head>

				<div>
					<article className={'welcome__article container mb-5'}>
						<h1 className={'h2 mb-3 font-weight-bold'}>Welcome to My 1 Life Roadmap</h1>
						<p className={'h5 text-black'}>
						The class you wished you'd had in school!
						</p>
						<p className={'h5 text-black'}>
						Buckle your seat-belt - and get ready to create your 1Life Masterpiece!
						</p>
					</article>

					<div className={'player-wrapper mb-4'}>
						<ReactPlayer
							url='https://youtu.be/pBME67hLgEw'
							width={'100%'}
							light
							playing
						/>
					</div>

					<article className={'lead serif-stack container'}>
						<p>Welcome 1Lifer!</p>  
						<p>
							It is important to note that this course is meant to enhance your life and move you forward but this will only happen if you complete each module and take MASSIVE and CONSISTENT ACTION in your life to LIVE your Roadmap.
						</p>
						<p>
							Please, don't let this course become “shelf help” rather than “self help”.  (Meaning you keep the information stored in your mind rather than applying it to your life consistently!)
						</p>
						<p>
							We also want to highlight that the Roadmap is a class that never really ends. The knowledge, confidence and experience that you'll develop through this program will be life strategies and skills you'll continue to act upon for a lifetime. You are encouraged to come back to the content routinely as you grow, evolve and change.
						</p>
						<p>
							The Roadmap is a journey.
						</p>
						<p>
							Every journey has turbulence, distractions and challenges, so expect them, and embrace them. Failing is encouraged!  This is how you learn and create momentum. If you're not willing to fail, then you're not willing to try, to RISK, and without trying new things, and taking action, nothing changes.
						</p>
						<p>
							Remember, you are never alone. If you need support, please reach out. Post in  Facebook and see the abundance of people on your team. We are all in this together. Don’t struggle on your own, don’t be an island.
						</p>
						<p>
							Your success is our success and your learning moments are moments of growth for us too, so please share! In this Roadmap family we are connected for life! If you have any questions or concerns about the class, your struggles, or anything don’t hesitate to connect with us through e-mail as well.
						</p>
						<p>
							So PUMPED to have YOU here!
						</p>
						<p>
							With gratitude,
						</p>
						<p>
							Your 1Life Team
						</p>
						</article>

						<article className={'container'}>
							<h3 className={'h4 font-weight-bold'}>What do I need for this course?</h3>

							<p className={'blockquote serif-stack'}>A web cam, a journal, a can-do attitude - and 4-5 hours a week of time well spent!</p>

							<p>Ready? Let’s dive in!</p>
						</article>

					<Link href={'/courses'}>
						<a className={'btn btn-brand py-4 btn-block'}>Dive in to the roadmap</a>
					</Link>

				</div>

			</div>
		);
	}
}

const mapStateToProps = (state: IStore) => state.home;

const mapDispatchToProps = () => (
	{}
);

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);