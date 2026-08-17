const ProductSpecsSection = ({ specs }) => (
  <section className="mt-14">
    <h2 className="text-2xl font-semibold text-navy-950">Technical Specifications</h2>
    <div className="mt-4 overflow-hidden rounded border border-navy-900/10 bg-white">
      <table className="w-full text-left text-sm">
        <tbody>
          {specs.map((spec) => (
            <tr key={spec.label} className="border-t border-navy-900/8 first:border-t-0">
              <th className="w-1/3 px-5 py-4 font-medium text-navy-900/70">{spec.label}</th>
              <td className="px-5 py-4 text-navy-950">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default ProductSpecsSection;