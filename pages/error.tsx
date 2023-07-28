import { NextPage } from 'next';
import Link from 'next/link';

const Error: NextPage = () => {
  return (
    <div className="text-center">
      <div>ErrorErrorErrorErrorError</div>
      <Link href="/" className="text-pink-500">Torna alla Home</Link>
    </div>
  )
}

export default Error;
