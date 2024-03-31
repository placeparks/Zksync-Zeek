import { useAddress, useContract, useOwnedNFTs, ThirdwebNftMedia, useContractRead } from '@thirdweb-dev/react';
import React, { useState, useEffect } from 'react';

const NFTCard = () => {
    const address = useAddress();
    const editionDropContract = "0x1d0E7d5bE3Fea1Ddff7ddb7baECC55Cc05450B78"
    const { contract } = useContract(editionDropContract, "edition-drop");
  const [balance, setBalance] = useState(0);
  
    
    const {
        data: nfts,
        isLoading: nftsLoading,
    } = useOwnedNFTs(contract, address);

    const { data: totalNFTsMinted, isLoading } = useContractRead(contract, "totalSupply", [0])

    useEffect(() => {
        if (contract && address) {
            contract.balanceOf(address, 0)
                .then((balance) => {
                    setBalance(balance.toNumber());
                })
                .catch((error) => {
                    console.error('Error fetching balance:', error);
                });

            }              
    }, [contract, address]);
    
 
    const truncateAddress = (address) => address.substring(0, 6) + "..." + address.substring(address.length - 4);
  
    const calculateWinningProbability = (ownedNfts, totalNftsMinted) => {
        console.log('Calculating winning chances with owned:', ownedNfts, 'and total:', totalNftsMinted); 
        if (totalNftsMinted === 0) {
          console.log('Total NFTs minted is 0, cannot calculate winning chances.');
          return 0; 
        }
        const probability = ((ownedNfts / totalNftsMinted) * 100);
        console.log('Winning chances:', probability + '%'); 
        return probability;
      };
  
    if (nftsLoading) {
      return <div className="text-center">Loading your NFTs...
      </div>;
    }

    return (
      <div className="flex flex-col items-center justify-center font-mono">
        {nfts && nfts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl m-auto p-4 md:p-8">
            {nfts.map(nft => (
              <React.Fragment key={nft.metadata.id.toString()}>
                <div className="flex items-center justify-center md:justify-end">
                  <ThirdwebNftMedia 
                    metadata={nft.metadata} 
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl h-auto"
                  />
                </div>
                <div className="flex flex-col items-center md:items-start justify-center">
                  <h1 className="text-lg md:text-xl font-bold">You own {balance} NFT(s)</h1>
                  <p className="text-sm md:text-lg font-semibold md:mb-2">Winning Chances: {calculateWinningProbability(balance, totalNFTsMinted)}%</p>
                  <h2 className="text-md md:text-lg font-bold">{nft.metadata.name}</h2>
                  <p className="text-xs md:text-sm">Owned by {truncateAddress(nft.owner)}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div className="text-center p-4">
            <h1 className="text-lg md:text-xl font-bold mb-2">You don't have any NFTs yet!</h1>
            <p className="text-sm md:text-lg">Mint your first NFT now and start your collection.</p>
          </div>
        )}
      </div>
    );
      
};

export default NFTCard;
