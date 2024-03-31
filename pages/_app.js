import React from 'react';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { ZksyncSepoliaTestnet } from "@thirdweb-dev/chains";
import '../styles/globals.css';
import { Navbar } from '../components/Navbar'; // Import Navbar component
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
	return (
		<ThirdwebProvider
			activeChain={ZksyncSepoliaTestnet}
			clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
		>
			<Navbar /> 
			<Component {...pageProps} />
			<Footer/>
		</ThirdwebProvider>
	);
}

export default MyApp;
