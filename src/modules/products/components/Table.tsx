import { useStore } from "@nanostores/react";
import { useEffect, type FC } from "react";
import { fetchProducts, productStore } from "../stores/productStore";

export const Table: FC = () => {
  const products = useStore(productStore);

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderRows = () => {
    return products.map((product, index) => (
      <tr key={product.id}>
        <td className="p-2 border">{index + 1}</td>
        <td className="p-2 border">{product.name}</td>
      </tr>
    ));
  };

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
    </>
  );
};
