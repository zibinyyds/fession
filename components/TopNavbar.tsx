import { FC } from "react";

import LanguageToggle from "./LanguageToggle";

interface Props {
  PageTitle: FC;
}

const TopNavbar: FC<Props> = ({ PageTitle }) => (
  <div className="flex grow mb-8 sm:mb-12">
    <div className="flex-initial sm:pr-4">
      <PageTitle />
    </div>
    <div className="flex-none grow justify-end items-center hidden sm:flex h-10">
      <LanguageToggle />
    </div>
  </div>
);

export default TopNavbar;
