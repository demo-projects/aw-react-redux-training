export const TOGGLE_LOADER = 'TOGGLE_LOADER';

export function toggleLoader({ visible = false, trigger }) {
  return {
    type: TOGGLE_LOADER,
    visible,
    meta: {trigger}
  }
}