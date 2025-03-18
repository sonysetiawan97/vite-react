import type { FC } from "react";
import { ReadButton } from "@components/actions/ReadButton";
import { EditButton } from "@components/actions/EditButton";
import { DeleteButton } from "@components/actions/DeleteButton";

interface ActionProps {
  id: string;
  onRead?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export const Action: FC<ActionProps> = ({ id, onRead, onEdit, onDelete }) => {
  return (
    <div className="d-flex gap-1">
      <ReadButton id={id} onClick={onRead} />
      <EditButton id={id} onClick={onEdit} />
      <DeleteButton id={id} onClick={onDelete} />
    </div>
  );
};
