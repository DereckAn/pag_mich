import authcss from "@/styles/auth.module.css";

interface AlertFailureProps {
  message?: string;
}

export const AlertFailure = ({ message }: AlertFailureProps) => {
  if (!message) {
    return null;
  }

  return (
    <div
      className={`max-w-md py-4 px-6 shadow-2xl shadow-red-800 rounded-lg bg-red-600 ${authcss.alertuser}`}
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <h3 className="text-xl text-white font-semibold">Error</h3>
        </div>
        <p className="text-white">{message}</p>
      </div>
    </div>
  );
};
