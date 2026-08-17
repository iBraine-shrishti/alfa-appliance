const ProductDescriptionSection = ({ product }) => {
  const rows = [
    ["Category", "Refrigerators"],
    ["Brand", "ALFA APPLIANCES"],
    ["Color", product.finish],
    ["Material", "Premium Grade Stainless Steel"],
    ["Weight", "142 kg"],
    ["Dimensions", '70" x 35.75" x 31.5"'],
    ["Department", "Home Appliances"],
    ["Manufacturer", "ALFA Global Manufacturing Ltd."],
  ];

  return (
    <section className="mt-14">
      <h2 className="text-2xl font-semibold text-navy-950">Product Description</h2>
      <div className="mt-4 overflow-hidden rounded-2xl border border-navy-900/10 bg-white">
        <table className="w-full text-left text-sm">
          <tbody>
            {rows.map(([label, value]) => (
              <tr key={label} className="border-t border-navy-900/8 first:border-t-0">
                <th className="w-1/3 px-5 py-4 font-medium text-navy-900/70">{label}</th>
                <td className="px-5 py-4 text-navy-950">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProductDescriptionSection;