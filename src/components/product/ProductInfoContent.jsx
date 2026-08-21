const ProductInfoContent = ({ product = {} }) => {
  const rows = [
    ["Category", product.categoryName || product.category_name || product.category || "Home Appliances"],
    ["Brand", product.brandName || product.brand_name || product.brand || "Alfa"],
    ["Color / Finish", product.color || product.finish || "Brushed Stainless Steel"],
    ["Capacity", product.capacity || "8.0 Kg / 345 Litres"],
    ["Weight", product.weight || "68 kg"],
    ["Dimensions", product.dimensions || "60 x 55 x 85 cm"],
    ["Energy Rating", product.energyRating || product.energy_rating || "5 Star"],
    ["Manufacturer", "Alfa Appliances UK Ltd."],
  ];

  return (
    <table className="w-full text-left text-sm">
      <tbody>
        {rows.map(([label, value]) => (
          <tr key={label} className="border-t border-navy-900/8 first:border-t-0">
            <th className="w-1/3 py-3 font-medium text-navy-900/70">{label}</th>
            <td className="py-3 text-navy-950">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductInfoContent;