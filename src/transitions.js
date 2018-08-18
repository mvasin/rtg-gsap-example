import { TimelineLite } from 'gsap/all';

export function fadeInOut(node, status, done) {
  const tl = new TimelineLite({
    onComplete: () => {
      console.log(node);
      done();
    }
  });

  /* eslint-disable default-case */
  switch (status) {
    case 'entering':
      tl.from(node, 3, { opacity: 0 });
      break;
    case 'exiting':
      tl.to(node, 3, { opacity: 0 });
      break;
  }
}
