import { useState, type FC } from "react";
import { Loading } from "@/components/Loading";
import { Pagination } from "@/components/Pagination";
import { useList } from "@/hooks/useList";
import type { Example } from "../types/exampleTypes";
import { EmptyData } from "@/components/errors/EmptyData";

export const Table: FC = () => {
  const [skip, setSkip] = useState(0);
  const { data, isLoading, error } = useList<Example>({
    module: "examples",
    skip,
  });

  const renderRows = () => {
    if (!data) {
      return (
        <tr>
          <td colSpan={2}>
            <EmptyData />
          </td>
        </tr>
      );
    }

    return data.data.map((example) => (
      <tr key={example.id}>
        <td className="p-2 border">{example.id}</td>
        <td className="p-2 border">{example.name}</td>
      </tr>
    ));
  };

  if (isLoading) return <Loading />;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="p-2 border">#</th>
            <th className="p-2 border">Name</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>

      <Pagination
        count={data?.count || 0}
        skip={skip}
        limit={10}
        onPageChange={setSkip}
      />
    </>
  );
};
