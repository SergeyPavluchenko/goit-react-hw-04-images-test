import { BlockButton, ButtonStyle } from './ButtonStyled';

export const Button = ({ onClick }) => {
  return (
    <BlockButton>
      <ButtonStyle onClick={onClick}>Load More</ButtonStyle>
    </BlockButton>
  );
};
