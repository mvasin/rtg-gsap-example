import { TimelineLite } from 'gsap/all';

export function fadeInOut(node, status, done) {
  const tl = new TimelineLite({
    onComplete: done,
    onReverseComplete: done,
    autoRemoveChildren: false
  }).fromTo(node, 3, { opacity: 0 }, { opacity: 1 });
  window.tl = tl;

  /* eslint-disable default-case */
  switch (status) {
    case 'entering':
      tl.play();
      break;
    case 'exiting':
      // console.log(tl.duration())
      tl.seek(50, false);
      console.log(tl.time());
      tl.reverse();
      break;
  }
}
