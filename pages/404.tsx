import { NextPage } from 'next';
import Link from 'next/link';

const Page404: NextPage = () => {
  return (
    <div className="text-center">
      <div>Pagina non esistente</div>
      <Link href="/" className="text-pink-500">Torna alla Home</Link>
    </div>
  )
}

export default Page404;
