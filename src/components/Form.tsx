import Image from 'next/image';

export const Form = () => {
  return (
    <div className="space-y-8">
      <div className="rounded-lg border text-card-color shadow-sm p-6 bg-comment-bg border-comment-border">
        <div className="flex items-center gap-2 mb-4">
          <Image
            src="/comment.svg"
            alt="Comment icon"
            width={20}
            height={20}
            className="opacity-70"
          />
          <h3 className="text-lg font-semibold text-color">
            Add a Comment
          </h3>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="comment" className="block text-sm font-medium mb-1">
              Select User
            </label>
            <select
              id="comment"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select an option</option>
            </select>
            <p className="text-sm text-muted-color mt-1">Commenting as </p>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-color mb-2"
            >
              Your Comment
            </label>
            <textarea
              id="message"
              placeholder="Write your comment here..."
              rows={3}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Image
              src="/submit_icon.svg"
              alt="Comment icon"
              width={17}
              height={17}
              className="opacity-70"
            />
            <span className="text-[0.9rem] font-medium">Post Comment</span>
          </button>
        </form>
      </div>
    </div>
  );
};
