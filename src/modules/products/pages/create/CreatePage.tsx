import { Text } from "@components/form/inputs/Text";
import { moduleName, type CreateModel } from "./../../types/Model";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { CancelButton } from "@components/buttons/CancelButton";
import { SubmitButton } from "@components/buttons/SubmitButton";
import { useCreate } from "@hooks/request/useCreate";
import { useSnackbar } from "notistack";
import type { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const { handleSubmit, reset } = useFormContext<CreateModel>();
  const { createAsync, isLoading } = useCreate<CreateModel>(moduleName);
  const navigate = useNavigate();

  const onSubmit = async (data: CreateModel) => {
    try {
      await createAsync({ url: moduleName, body: data });
      enqueueSnackbar(t("modules.products.create.notification.success"), {
        variant: "success",
      });

      reset();
      navigate(`/${moduleName}`);
    } catch (error: unknown) {
      const { message } = error as AxiosError;
      enqueueSnackbar(message, {
        variant: "error",
      });
    }
  };

  return (
    <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-12">
        <Text name="name" label={t("modules.products.create.form.name")} />
      </div>

      <div className="col-12">
        <div className="d-flex gap-2">
          <CancelButton to={`/${moduleName}`} />
          <SubmitButton isLoading={isLoading} />
        </div>
      </div>
    </form>
  );
};

export default CreatePage;
