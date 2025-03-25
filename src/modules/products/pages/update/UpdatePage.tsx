import { Text } from "@components/form/inputs/Text";
import { moduleName, type UpdateModel } from "./../../types/Model";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { SubmitButton } from "@components/buttons/SubmitButton";
import { useSnackbar } from "notistack";
import type { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { BackButton } from "@components/buttons/BackButton";
import { useUpdate } from "@hooks/request/useUpdate";

const UpdatePage = () => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const { handleSubmit, reset, getValues } = useFormContext<UpdateModel>();
  const { updateAsync, isLoading } = useUpdate<UpdateModel>(moduleName);
  const navigate = useNavigate();

  const onSubmit = async (data: UpdateModel) => {
    try {
      const id = getValues("id");
      await updateAsync({ id, url: moduleName, body: data });
      enqueueSnackbar(t("modules.products.update.notification.success"), {
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
        <Text name="name" label={t("modules.products.update.form.name")} />
      </div>

      <div className="col-12">
        <div className="d-flex gap-2">
          <BackButton />
          <SubmitButton isLoading={isLoading} />
        </div>
      </div>
    </form>
  );
};

export { UpdatePage };
export default UpdatePage;
