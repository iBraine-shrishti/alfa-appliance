import { useState } from "react";
import { FiStar, FiX, FiUploadCloud, FiHelpCircle } from "react-icons/fi";

const WriteReviewModal = ({ isOpen, onClose, onSubmitReview }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);

  if (!isOpen) return null;

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + uploadedFiles.length > 5) {
      alert("You can upload a maximum of 5 photos.");
      return;
    }
    setUploadedFiles((prev) => [...prev, ...files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please select a star rating!");
      return;
    }

    const newReview = {
      author: customerName,
      email: customerEmail,
      rating,
      text: reviewText,
      time: "Just now",
      image: uploadedFiles.length > 0 ? URL.createObjectURL(uploadedFiles[0]) : null,
    };

    if (onSubmitReview) {
      onSubmitReview(newReview);
    }

  
    setRating(0);
    setReviewText("");
    setCustomerName("");
    setCustomerEmail("");
    setUploadedFiles([]);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
  
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />


      <div
        className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-1 text-navy-900/40 hover:bg-navy-900/5 hover:text-navy-950"
        >
          <FiX size={20} />
        </button>

        <h3 className="text-xl font-bold text-navy-950">Ratings & Reviews</h3>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">

          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(star)}
                className="p-0.5 text-navy-900/20 transition-transform hover:scale-110"
              >
                <FiStar
                  size={36}
                  className={
                    star <= (hoverRating || rating)
                      ? "fill-amber-400 text-amber-400"
                      : "fill-navy-900/10 text-navy-900/15"
                  }
                />
              </button>
            ))}
          </div>

          <div>
            <label className="block text-sm font-semibold text-navy-950">
              Product Review
            </label>
            <textarea
              rows={4}
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Example: What I like best about this product is..."
              className="mt-2 w-full rounded-xl border border-navy-900/15 bg-navy-900/[0.02] p-3 text-sm text-navy-950 placeholder-navy-900/30 focus:border-brand-blue focus:bg-white focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-navy-950">
              Upload media
            </label>
            <div className="relative mt-2 flex flex-col items-center justify-center rounded-xl border border-dashed border-navy-900/20 bg-navy-900/[0.01] p-6 text-center transition-colors hover:bg-navy-900/[0.03]">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                className="absolute inset-0 cursor-pointer opacity-0"
              />
              <FiUploadCloud className="text-navy-900/30" size={24} />
              <p className="mt-2 text-xs text-navy-900/70">
                Upload up to 5 photos drag & drop or{" "}
                <span className="font-semibold text-brand-blue underline">
                  click here
                </span>{" "}
                to upload files
              </p>
            </div>
            {uploadedFiles.length > 0 && (
              <p className="mt-1.5 text-xs font-medium text-brand-blue">
                {uploadedFiles.length} file(s) attached
              </p>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-semibold text-navy-950">
                Customer name
              </label>
              <span className="flex items-center gap-1 text-xs text-navy-900/50">
                Name display format <FiHelpCircle size={12} />
              </span>
            </div>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Type your name here"
              className="mt-2 w-full rounded-xl border border-navy-900/15 bg-navy-900/[0.02] px-4 py-2.5 text-sm text-navy-950 placeholder-navy-900/30 focus:border-brand-blue focus:bg-white focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-navy-950">
              Customer Email
            </label>
            <input
              type="email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              placeholder="email@example.com"
              className="mt-2 w-full rounded-xl border border-navy-900/15 bg-navy-900/[0.02] px-4 py-2.5 text-sm text-navy-950 placeholder-navy-900/30 focus:border-brand-blue focus:bg-white focus:outline-none"
              required
            />
          </div>

        
          <button
            type="submit"
            className="w-full rounded-xl bg-navy-900 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-navy-950"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default WriteReviewModal;