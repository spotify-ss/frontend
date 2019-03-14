import * as authActions from './auth';
import * as sharedActions from './shared';
import * as thumbActions from './thumb';
import * as trackActions from './track';

// Track Actions----------------------------------------------------------------------------------------------------------------------

export const PLAY = 'PLAY';

export const play = trackId => {
  return {
    type: PLAY,
    payload: trackId
  };
};

export default {
  ...authActions,
  ...sharedActions,
  ...thumbActions,
  ...trackActions,
  PLAY,
  play
};

