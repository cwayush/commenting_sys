'use client';

import Image from 'next/image';
import { Card } from './Card';


export const CommentBox = () => {
  return (
    <>
      <div className="space-y-6 mt-6 ">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-color">Comments</h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 flex gap-2 items-center bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              <Image
                src="/newest.svg"
                alt="Comment icon"
                width={17}
                height={17}
                className="opacity-70"
              />
              <span className="text-[0.9rem] font-medium">Newest</span>
            </button>
            <button className="px-4 py-2 flex gap-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
              <Image
                src="/oldest.svg"
                alt="Comment icon"
                width={17}
                height={17}
                className="opacity-70"
              />
              <span className="text-[0.9rem] font-medium">Oldest</span>
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <Card />
        </div>
      </div>
    </>
  );
};
