import React from 'react';
import LoadingWrapper from './LoadingWrapper/LoadingWrapper';
import LoadingMain from './LoadingMain/LoadingMain';
import LoadingGroups from './LoadingGroups/LoadingGroups';
import { LoadingLeftGroup, LoadingRightGroup } from './LoadingGroup/LoadingGroup';
import { LoadingPrimaryItem, LoadingSecondaryItem } from './LoadingItem/LoadingItem';
import LoadingSVG from './LoadingSVG/LoadingSVG';
import LoadingMsg from './LoadingMsg/LoadingMsg';

const Loading = ({ text }) => (
  <LoadingWrapper>
    <LoadingMain>
      <LoadingGroups>
        <LoadingLeftGroup>
          <LoadingPrimaryItem />
          <LoadingPrimaryItem />
          <LoadingPrimaryItem />
        </LoadingLeftGroup>
        <LoadingRightGroup>
          <LoadingSecondaryItem />
          <LoadingSecondaryItem />
          <LoadingSecondaryItem />
        </LoadingRightGroup>
      </LoadingGroups>
      <LoadingSVG />
    </LoadingMain>
    {text && <LoadingMsg>{text}</LoadingMsg>}
  </LoadingWrapper>
);

export default Loading;
