import type { FC } from "react";
import { ReadAction } from "@components/actions/ReadButton";
import { EditAction } from "@components/actions/EditButton";
import { DeleteAction } from "@components/actions/DeleteButton";

interface ActionProps {
  id: string;
  onRead?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export const Action: FC<ActionProps> = ({ id, onRead, onEdit, onDelete }) => {
  return (
    <div className="d-flex gap-1">
      <ReadAction id={id} onClick={onRead} />
      <EditAction id={id} onClick={onEdit} />
      <DeleteAction id={id} onClick={onDelete} />
    </div>
  );
};
