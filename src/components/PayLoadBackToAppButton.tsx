import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const PayloadBackToAppButton = () => {
  return (
    <Link href={'/app'}>
      <button className='btn btn--style-primary btn--icon-style-without-border btn--size-small'>
        <span>
          <ArrowLeft /> Back to App
        </span>
      </button>
    </Link>
  );
};

export default PayloadBackToAppButton;
