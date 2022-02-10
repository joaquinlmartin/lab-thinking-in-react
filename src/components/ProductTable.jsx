import { useState } from "react";
import ProductRow from "./ProductRow";

function ProductTable() {
    const [products, setProducts] = useState(0);
    return (
        <div>
            <ProductRow/>
        </div>
    )
}

export default ProductTable;