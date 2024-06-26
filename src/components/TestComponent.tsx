import { getPayload } from 'payload';
import configPromise from '@payload-config';

export const TestComponent = async () => {
  const payload = await getPayload({ config: configPromise });
  const url = payload.getAdminURL();
  return <div>The admin panel is running at: {url}</div>;
};

export default TestComponent;
