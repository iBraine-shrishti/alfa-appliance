const ProductInfoContent = ({ product }) => {
  const rows = [
    ["Category", "Refrigeration"],
    ["Brand", "ALFA APPLIANCES"],
    ["Color", product.finish],
    ["Material", "Premium Grade Stainless Steel"],
    ["Weight", "142 kg"],
    ["Dimensions", '70" x 35.75" x 31.5"'],
    ["Department", "Home Appliances"],
    ["Manufacturer", "ALFA Global Manufacturing Ltd."],
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