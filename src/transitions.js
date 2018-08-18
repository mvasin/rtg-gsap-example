// import { TimelineLite } from 'gsap/all';

export function fadeInOut(tl, node, status, done) {
  /* eslint-disable default-case */
  switch (status) {
    case 'entering':
      const savedDisplay = window
        .getComputedStyle(node)
        .getPropertyValue('display');
      node.style.display = 'none';
      tl.call(() => console.log('fadeInOut entering started'));
      tl.addLabel('entering');
      tl.set(node, { display: savedDisplay }); // show (restore) display
      tl.fromTo(node, 3, { opacity: 0 }, { opacity: 1 });
      tl.call(() => {
        console.log('fadeInOut entering done');
        done();
      });
      break;
    case 'exiting':
      tl.call(() => console.log('fadeInOut exiting started'));
      tl.addLabel('exiting');
      tl.fromTo(node, 3, { opacity: 1 }, { opacity: 0 });
      tl.call(() => {
        console.log('fadeInOut exiting done');
        done();
      });
      break;
  }
}

export function displayNone(tl, node, status, done) {
  /* eslint-disable default-case */
  switch (status) {
    case 'entering':
      // hide node before it starts entering
      const savedDisplay = window
        .getComputedStyle(node)
        .getPropertyValue('display');
      node.style.display = 'none';

      tl.call(() => console.log('displayNone entering started'));
      tl.addLabel('entering');
      tl.set(node, { display: savedDisplay }); // show (restore) display
      tl.call(() => {
        console.log('displayNone entering done');
        done();
      });
      break;
    case 'exiting':
      tl.addLabel('exiting');
      tl.call(() => console.log('displayNone exiting started'));
      tl.set(node, { display: 'none' });
      tl.call(() => {
        console.log('displayNone exiting done');
        done();
      });
      break;
  }
}
