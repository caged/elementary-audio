import {
  ElementaryWebAudioRenderer as core,
  el,
} from "@nick-thompson/elementary";

// From https://docs.elementary.audio/guides/writing_reusable_components#memoization
function supersaw({ props }) {
  let saws = [];
  for (let i = 0; i < props.voices; ++i) {
    let detune = (i / props.voices) * props.spread;
    saws.push(el.sub(el.phasor(props.frequency + detune), 0.5));
  }
  return el.add(saws);
}
export default core.memo(supersaw);
