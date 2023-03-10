import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { Box } from '@mui/joy';
import { formatEther } from '@ethersproject/units';

const ETHBalance = () => {
  const [ethBalance, setEthBalance] = useState<number | undefined>(undefined);
  const { account, active, library, chainId } = useWeb3React<Web3Provider>();
  const provider = library;

  useEffect(() => {
    if (active && account) {
      provider?.getBalance(account).then(result => {
        setEthBalance(Number(formatEther(result)));
      });
    }
  });

  return (
    <div>
      {active ? (
        <Box>
          ETH in account: {ethBalance?.toFixed(3)} {chainId === 31337 ? 'Test' : ' '} ETH
        </Box>
      ) : (
        <Box>ETH in account:</Box>
      )}
    </div>
  );
};

export default ETHBalance;
