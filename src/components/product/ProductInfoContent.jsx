const ProductInfoContent = ({ product = {} }) => {
  const rows = [
    ["Category", product.category_name || (typeof product.category === "string" ? product.category : "Home Appliances")],
    ["Brand", product.brand_name || product.brand || "Alfa Appliances"],
    ["Type", product.appliance_type || "Freestanding Appliance"],
    ["Color / Finish", product.color || product.finish || "Standard Finish"],
    ["Warranty", product.warranty || "2 Years Manufacturer Guarantee"],
    ["Dimensions", product.dimensions || "Standard Domestic Dimensions"],
    ["Capacity", product.capacity || "Standard Volume"],
    ["Department", "Home Appliances"],
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