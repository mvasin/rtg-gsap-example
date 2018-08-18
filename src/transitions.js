import { TimelineLite } from 'gsap/all';

export function fadeInOut(tl, node, status, done) {
  /* eslint-disable default-case */
  switch (status) {
    case 'entering':
      const tlIn = new TimelineLite({ onComplete: done }).fromTo(
        node,
        3,
        { opacity: 0 },
        { opacity: 1 }
      );

      // tl.remove(tl.getTweensOf(node, true))
      tl.add(tlIn);
      break;
    case 'exiting':
      const tlOut = new TimelineLite({ onComplete: done }).fromTo(
        node,
        3,
        { opacity: 1 },
        { opacity: 0 }
      );

      // tl.remove(tl.getTweensOf(node, true))
      tl.add(tlOut);
      break;
  }
}
