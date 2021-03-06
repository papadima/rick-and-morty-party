import React, { useContext, ReactElement } from 'react';
import styled from 'styled-components';
import { FinderStoreContext } from '../../store/finder';
import { CollectionStoreContext } from '../../store/collection';
import { Character } from '../Character';
import { Grid } from '../Grid';

const StyledOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${(props): string => props.theme.colors.overlay};
`;
const StyledError = styled.p`
  color: ${(props): string => props.theme.colors.error};
`;

export default (): ReactElement => {
  const { state: finderState } = useContext(FinderStoreContext);
  const { state: collectionState } = useContext(CollectionStoreContext);

  return (
    <Grid>
      {finderState.error && <StyledError>{finderState.error}</StyledError>}
      {collectionState.itemsByPages.length && !finderState.error
        ? collectionState.itemsByPages.flat()
          .map(({
            id,
            name,
            image,
          }, i) => (
            <Character
              key={`item${Date.now() + i}`}
              id={id}
              name={name}
              image={image}
            />
          ))
        : null}
      {finderState.loading ? (<StyledOverlay />) : null}
    </Grid>
  );
};
