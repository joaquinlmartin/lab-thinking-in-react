function ProductRow({ name, price, inStock }) {
    const colorChange = inStock ? { color: "black", } : { color: "red", };
    return (
        <div>
            <table style={colorChange}>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{price}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductRow;