export const SET_ALBUMS = 'SET_ALBUMS';
export const UPDATE_ALBUMS = 'UPDATE_ALBUMS';
export const RESET_ALBUMS = 'RESET_ALBUMS';

export function setAlbums(albums = []) {
  return {
    type: SET_ALBUMS,
    albums,
    meta: {
      log: 'Replace the album collection with new one'
    }
  }
} 