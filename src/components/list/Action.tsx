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

export const Action: FC<ActionProps> = ({
  id,
  onRead = (id: string) => {
    console.log(`Action read on id: ${id}`);
  },
  onEdit = (id: string) => {
    console.log(`Action edit on id: ${id}`);
  },
  onDelete = (id: string) => {
    console.log(`Action delete on id: ${id}`);
  },
}) => {
  return (
    <div className="d-flex gap-1">
      <ReadAction
        id={id}
        onClick={(id) => {
          onRead(id);
        }}
      />
      <EditAction
        id={id}
        onClick={(id) => {
          onEdit(id);
        }}
      />
      <DeleteAction
        id={id}
        onClick={(id) => {
          onDelete(id);
        }}
      />
    </div>
  );
};
