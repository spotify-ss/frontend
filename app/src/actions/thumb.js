export const DOWNTHUMB_TRACK = 'DOWNTHUMB_TRACK';
export const UPTHUMB_TRACK = 'UPTHUMB_TRACK';

export const upthumbTrack = id => ({ type: UPTHUMB_TRACK, payload: id });
export const downthumbTrack = id => ({ type: DOWNTHUMB_TRACK, payload: id });
