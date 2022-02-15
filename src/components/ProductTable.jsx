import ProductRow from "./ProductRow";

function ProductTable({ products }) {
    return (
        <table>
            <thead>
                <th>Name</th>
                <th>Price</th>
            </thead>
            <tbody>
                <td>
                {products.map((product, i) => (
                <ProductRow
                    key={i}
                    id={product.id}
                    category={product.category}
                    inStock={product.inStock}
                    name={product.name}
                    price={product.price}
                />
            ))}
                </td>
            </tbody>
        </table>
    )
}

export default ProductTable;