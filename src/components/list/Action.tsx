import type { FC } from "react";
import { ReadButton } from "@components/actions/ReadButton";
import { EditButton } from "@components/actions/EditButton";
import { DeleteButton } from "@components/actions/DeleteButton";

interface ActionProps {
  id: string;
  onDelete?: (id: string) => void;
}

export const Action: FC<ActionProps> = ({ id, onDelete }) => {
  return (
    <div className="d-flex gap-1 align-items-center">
      <ReadButton id={id} />
      <EditButton id={id} />
      <DeleteButton id={id} onClick={onDelete} />
    </div>
  );
};
