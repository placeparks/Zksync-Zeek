import React, { useEffect, useState } from 'react';
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';
import { useRouter } from 'next/router';

export function Navbar() {
    const address = useAddress();
    const router = useRouter();
    const [previousAddress, setPreviousAddress] = useState(null);

    useEffect(() => {
        if (address) {
            setPreviousAddress(address);
        } else if (previousAddress && !address) {
            // Only redirect to home when the wallet was connected before and now it's disconnected
            router.push('/');
        }
    }, [address, previousAddress, router]);

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Zksync ZEEK</span>
                </a>
                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                    {address && (
                        <a href="/dashboard" className="text-black font-bold hover:text-gray-200">
                            Dashboard
                        </a>
                    )}
                    <ConnectWallet 
                        accentColor="#4ade80"
                        colorMode="light"
                    />
                </div>
            </div>
        </nav>
    );
}
