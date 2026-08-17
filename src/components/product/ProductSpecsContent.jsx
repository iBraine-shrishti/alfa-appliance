const ProductSpecsContent = ({ specs }) => (
  <table className="w-full text-left text-sm">
    <tbody>
      {specs.map((spec) => (
        <tr key={spec.label} className="border-t border-navy-900/8 first:border-t-0">
          <th className="w-1/3 py-3 font-medium text-navy-900/70">{spec.label}</th>
          <td className="py-3 text-navy-950">{spec.value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ProductSpecsContent;