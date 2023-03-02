import Head from "next/head";
import { useTranslation } from "next-i18next";

function List() {
  const { t } = useTranslation("common");
  return (
    <div className="flex justify-center items-center py-8 lg:py-32">
      <div className="bg-background-light w-4/5 lg:w-1/2 max-w-xl rounded-xl border border-foreground-alt-500 shadow p-6 md:p-12">
        <div className="flex justify-center mt-2">
          <div className="w-3/5 lg:w-1/2 min-h-[200px]">
            <img src="/animations/failure.gif" />
          </div>
        </div>
        <div className="w-full text-center mb-8">
          <p className="break-normal font-bold text-primary-light">
            {t("v2.error404.noPickles")}
          </p>
        </div>
        <div className="w-full text-center mb-8">
          <p className="break-normal text-foreground-alt-200">
            {t("v2.error404.errorMessage")}
          </p>
        </div>
      </div>
    </div>
  );
}

export { getStaticProps } from "@/utils/locales";
export default List;
