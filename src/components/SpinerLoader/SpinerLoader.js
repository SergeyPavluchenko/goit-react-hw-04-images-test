import { MutatingDots } from 'react-loader-spinner';
import { Loader } from './SpinerLoaderStyled';
// import { MutatingDots } from './SpinerLoaderStyled';

export const SpinerLoader = () => {
  return (
    <Loader>
      <MutatingDots />
    </Loader>
  );
};
