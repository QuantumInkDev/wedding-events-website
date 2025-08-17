import { Loading } from './Loading';

export const SuspenseLoader = () => {
  return (
    <div style={{ minHeight: '60vh' }}>
      <Loading message="Loading page..." />
    </div>
  );
};