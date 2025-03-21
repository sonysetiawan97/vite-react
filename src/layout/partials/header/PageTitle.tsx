import { useStore } from "@nanostores/react";
import type { FC } from "react";
import { pageHeader } from "@stores/PageHeader";
import useCapitalize from "@hooks/useCapitalize";

export const PageTitle: FC = () => {
  const { title } = useStore(pageHeader);
  const { capitalizeFirstLetterWords } = useCapitalize();

  return (
    <>
      <h1 className="page-heading d-flex text-gray-900 fw-bold fs-5 flex-column justify-content-center my-0">
        {capitalizeFirstLetterWords(title)}
      </h1>
    </>
  );
};
