import { CommentBox } from '@/components/CommentBox';
import { Form } from '@/components/Form';
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header />
        <Form />
        <CommentBox />
      </div>
    </div>
  );
}
