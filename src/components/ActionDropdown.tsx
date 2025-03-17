import { type FC, useState, useRef, useEffect } from "react";
import { ReadAction } from "@components/actions/ReadButton";
import { EditAction } from "@components/actions/EditButton";
import { DeleteAction } from "@components/actions/DeleteButton";
import { useTranslation } from "react-i18next";

interface ActionDropdownProps {
  id: string;
  onRead?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export const ActionDropdown: FC<ActionDropdownProps> = ({
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
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="px-2 py-1 text-sm text-white bg-green-500 rounded"
      >
        {t("button.action")} ▼
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
          <ReadAction
            id={id}
            onClick={(id) => {
              onRead(id);
              setOpen(false);
            }}
          />
          <EditAction
            id={id}
            onClick={(id) => {
              onEdit(id);
              setOpen(false);
            }}
          />
          <DeleteAction
            id={id}
            onClick={(id) => {
              onDelete(id);
              setOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
};
