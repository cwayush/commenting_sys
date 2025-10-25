const data = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@techcorp.com',
  company: {
    name: 'TechCorp Solutions',
  },
  body: 'Great explanation! I had some questions about the implementation details, but your code samples cleared everything up. Looking forward to trying this out in my project.',
};

export const Card = () => {
  return (
    <div className="rounded-lg border text-card-color shadow-sm p-6 bg-comment-bg border-comment-border hover:bg-comment-hover transition-all duration-200 hover:shadow-lg">
      <div className="flex gap-4">
        <div className="shrink-0">
          <div className="w-12 h-12 bg-avatar-bg text-avatar-text rounded-full flex items-center justify-center font-semibold text-lg cursor-pointer hover:ring-2 hover:ring-primary hover:ring-offset-2 transition-all duration-200">
            JD
          </div>
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <div>
              <h3 className="font-semibold text-color text-lg cursor-pointer hover:text-primary transition-colors duration-200">
                {data.name}
              </h3>
              <p className="text-sm text-muted-color">{data.email}</p>
            </div>
            <div className="text-sm text-muted-color font-medium">
              {data.company.name}
            </div>
          </div>

          <div className="pt-2">
            <p className=" text-color leading-relaxed">{data.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
