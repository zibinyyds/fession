import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
  return (
    <>
      <div className="block xl:flex mb-8 sm:mb-10">
        <div className="w-full mb-4 xl:w-1/2 xl:mr-8 xl:mb-0">
          {/* <PerformanceCard /> */}
          12312
        </div>
        <div className="flex flex-col md:justify-start 2xl:justify-between">
          {/* <PickleDillBalanceCard /> */}
        </div>
      </div>
      {/* <FarmsTable title={t("v2.dashboard.joinedFarms")} dashboard requiresUserModel /> */}
      <div className="mt-4">
        {/* <DashboardCalloutCard /> */}
      </div>
    </>
  );
    </>
  )
}

export { getStaticProps } from "@/utils/locales";
