import React, {
  memo,
  ReactChild,
  ReactElement,
  ReactEventHandler,
} from 'react';
import styled from 'styled-components';
import CardImage from './CardImage';
import CardPlaceholder from './CardPlaceholder';

const StyledCard = styled.div<{ opacity: number }>`
  position: relative;
  padding: 0 0.5rem 1rem;
  text-align: center;
  opacity: ${(props): number => props.opacity};
  transition: opacity 0.15s;

  & > svg {
    height: inherit;
    width: inherit;
  }
`;

export default memo(({
  placeholder = '',
  image,
  opacity = 1,
  children,
  onClick,
  onTransitionEnd,
}: {
  placeholder?: string;
  image?: string | null;
  opacity?: number;
  children?: ReactChild;
  onClick?: ReactEventHandler;
  onTransitionEnd?: ReactEventHandler;
}): ReactElement => (
  <StyledCard
    opacity={opacity}
    onClick={onClick}
    onTransitionEnd={onTransitionEnd}
  >
    {image ? <CardImage src={image} /> : <CardPlaceholder content={placeholder} />}
    {children}
  </StyledCard>
));
