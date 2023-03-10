import Head from 'next/head';
import Image from 'next/image';
import ConnectMetamask from '@/wallet/ConnectMetaMask';
import ETHBalance from '@/wallet/ETHBalance';
import ETHBalanceSWR from '@/wallet/ETHBalanceSWR';

export default function Home() {
  return (
    <>
      return (
      <>
        <div className="block xl:flex mb-8 sm:mb-10">
          <div className="w-full mb-4 xl:w-1/2 xl:mr-8 xl:mb-0">
            <ConnectMetamask />
            <ETHBalance/>
            <ETHBalanceSWR/>
          </div>
          <div className="flex flex-col md:justify-start 2xl:justify-between"></div>
        </div>
        <div className="mt-4"></div>
      </>
      );
    </>
  );
}

export { getStaticProps } from '@/utils/locales';
