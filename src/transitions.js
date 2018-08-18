// setimeout 0 is used to make sure entering transitions
// are added to timeline AFTER exiting transitions

// hide node and remember its display CSS value
// there is a (possible due to race condition) gap between
// node entering 'entering' transition stage and when its time
// on timeline, after exiting animation, actually comes
function hide(node) {
  const savedDisplay = window
    .getComputedStyle(node)
    .getPropertyValue('display');
  node.style.display = 'none';
  // set this value back when the node actually starts entering (on timeline)
  return savedDisplay;
}

export function fadeInOut(tl, node, status, done) {
  /* eslint-disable default-case */
  switch (status) {
    case 'entering':
      const display = hide(node);
      const later = () => {
        tl.set(node, { display });
        tl.fromTo(node, 3, { opacity: 0 }, { opacity: 1 });
        tl.call(done);
      };
      window.setTimeout(later, 0);
      break;
    case 'exiting':
      tl.fromTo(node, 3, { opacity: 1 }, { opacity: 0 });
      tl.call(done);
      break;
  }
}

export function displayNone(tl, node, status, done) {
  /* eslint-disable default-case */
  switch (status) {
    case 'entering':
      const display = hide(node);
      const later = () => {
        tl.set(node, { display });
        tl.call(done);
      };
      window.setTimeout(later, 0);
      break;
    case 'exiting':
      tl.call(done);
      break;
  }
}
