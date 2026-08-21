const ProductSpecsContent = ({ specs, product = {} }) => {
  let specsList = Array.isArray(specs) ? specs : [];

  if (specsList.length === 0) {
    specsList = [
      { label: "Capacity / Volume", value: product.capacity || "8.0 Kg / 345 Litres" },
      { label: "Energy Rating", value: product.energyRating || product.energy_rating || "5 Star" },
      { label: "Inverter Technology", value: product.inverter_technology ? "Yes (Inverter Motor)" : "Standard Motor" },
      { label: "Model Number", value: product.modelNumber || product.model_number || "WW80TA046AX" },
      { label: "Color / Finish", value: product.color || "Inox Steel" },
      { label: "Dimensions", value: product.dimensions || "60 x 55 x 85 cm" },
      { label: "Noise Level", value: product.noise_level || "71 dB" },
      { label: "Warranty", value: product.warranty || "2 Years Comprehensive + 10 Years Motor" },
    ];
  }

  return (
    <table className="w-full text-left text-sm">
      <tbody>
        {specsList.map((spec, idx) => (
          <tr key={spec.label || idx} className="border-t border-navy-900/8 first:border-t-0">
            <th className="w-1/3 py-3 font-medium text-navy-900/70">{spec.label}</th>
            <td className="py-3 text-navy-950">{spec.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductSpecsContent;