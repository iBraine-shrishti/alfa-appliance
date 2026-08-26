import { FiCheckCircle } from "react-icons/fi";

const CheckoutSteps = ({ currentStep = 1 }) => {
  const steps = [
    { id: 1, name: "Delivery" },
    { id: 2, name: "Payment" },
    { id: 3, name: "Review" },
  ];

  return (
    <div className="mb-8 flex items-center justify-center gap-3 text-sm font-semibold">
      {steps.map((step, idx) => {
        const isCompleted = currentStep > step.id || (currentStep === 3 && step.id === 3);
        const isCurrent = currentStep === step.id && !isCompleted;

        return (
          <div key={step.id} className="flex items-center gap-3">
            <span
              className={`flex items-center gap-1 ${
                isCompleted
                  ? "text-emerald-600"
                  : isCurrent
                  ? "text-brand-blue"
                  : "text-navy-900/40"
              }`}
            >
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                  isCompleted
                    ? "bg-emerald-600 text-white"
                    : isCurrent
                    ? "bg-brand-blue text-white"
                    : "bg-navy-900/10 text-navy-900/60"
                }`}
              >
                {isCompleted ? <FiCheckCircle size={14} /> : step.id}
              </span>
              {step.name}
            </span>
            {idx < steps.length - 1 && (
              <span className="h-px w-8 bg-navy-900/15" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CheckoutSteps;
