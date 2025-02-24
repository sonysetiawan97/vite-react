import { useState, type FC } from "react";
import { Loading } from "@/components/Loading";
import { Pagination } from "@/components/Pagination";
import { useList } from "@/hooks/useList";
import type { Product } from "../types/productTypes";
import { EmptyData } from "@/components/errors/EmptyData";

export const Table: FC = () => {
  const [skip, setSkip] = useState(0);
  const { data, isLoading, error } = useList<Product>({
    module: "products",
    skip,
  });

  const renderRows = () => {
    if (!data || !data.data) {
      return (
        <tr>
          <td colSpan={2}>
            <EmptyData />
          </td>
        </tr>
      );
    }

    return data.data.map((product) => (
      <tr key={product.id}>
        <td className="p-2 border">{product.id}</td>
        <td className="p-2 border">{product.name}</td>
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
