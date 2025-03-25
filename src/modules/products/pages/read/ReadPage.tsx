import { Text } from "@components/form/inputs/Text";
import { moduleName, type ReadModel } from "./../../types/Model";
import { useTranslation } from "react-i18next";
import { BackButton } from "@components/buttons/BackButton";
import type { FC } from "react";
import { UpdateButton } from "@components/buttons/UpdateButton";
import { useFormContext } from "react-hook-form";

const ReadPage: FC = () => {
  const { getValues } = useFormContext<ReadModel>();
  const { t } = useTranslation();

  return (
    <form className="row g-3">
      <div className="col-12">
        <Text
          name="name"
          label={t("modules.products.read.form.name")}
          readOnly={true}
        />
      </div>

      <div className="col-12">
        <div className="d-flex gap-2 mt-2">
          <BackButton to={`/${moduleName}`} />
          <UpdateButton to={`/${getValues("id")}/update`} />
        </div>
      </div>
    </form>
  );
};

export default ReadPage;
