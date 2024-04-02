import { useAddress, useContract, useOwnedNFTs, ThirdwebNftMedia } from '@thirdweb-dev/react';
import React from 'react';

const NFTCard = () => {
    const address = useAddress();
    const editionDropContract = "0xEE48b8AF0fF6C05Ffdacf3a2225848c5e3FcbbFB";
    
    const { contract } = useContract(editionDropContract, "edition-drop");
     
    const {
        data: nfts,
        isLoading: nftsLoading,
    } = useOwnedNFTs(contract, address);
    
    const truncateAddress = (address) => {
        return address.substring(0, 6) + "..." + address.substring(address.length - 4);
    };

    if (nftsLoading) {
        return <div className="text-center">Loading your NFTs...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {nfts && nfts.length > 0 ? (
                <div className="text-center">
                    <h1 className="text-xl font-bold mb-2">You own {nfts.length} NFT(s)</h1>
                    {nfts.map(nft => (
                        <div key={nft.metadata.id.toString()} className="flex flex-col items-center justify-center mb-4">
                            <h2 className="text-lg font-bold">{nft.metadata.name}</h2>
                            <p className="mb-2">Quantity: {nft.metadata.quantity}</p>
                            <ThirdwebNftMedia 
                                metadata={nft.metadata} 
                                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                            />
                            <p>Owned by {truncateAddress(nft.owner)}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center text-black">
                    <h1 className="text-xl font-bold mb-2">You don&apos;t have any NFTs yet!</h1>
                    <p>Mint your first NFT now and start your collection.</p>
                </div>
            )}
        </div>
    );
};

export default NFTCard;