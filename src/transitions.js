// setimeout 0 is used to make sure _entering_ transitions
// are added to timeline AFTER _exiting_ transitions
// this is kinda hack
function hide(node) {
  node.style.display = 'none';
}

export function downUp(tl, node, status, delayIn, done) {
  /* eslint-disable default-case */
  switch (status) {
    case 'entering':
      hide(node);
      const runAfterAddingExitingToTimeline = () => {
        tl.delay(delayIn ? delayIn : 0);
        tl.set(node, { display: '' });
        tl.fromTo(node, 1, { y: '-100%' }, { y: '0%' });
        tl.call(done);
      };
      window.setTimeout(runAfterAddingExitingToTimeline, 0);
      break;
    case 'exiting':
      tl.fromTo(node, 1, { y: '0%' }, { y: '100%' });
      tl.call(done);
      break;
  }
}

export function fadeInOut(tl, node, status, delayIn, done) {
  /* eslint-disable default-case */
  switch (status) {
    case 'entering':
      hide(node);
      const runAfterAddingExitingToTimeline = () => {
        tl.delay(delayIn ? delayIn : 0);
        tl.set(node, { display: '' });
        tl.fromTo(node, 2, { opacity: 0 }, { opacity: 1 });
        tl.call(done);
      };
      window.setTimeout(runAfterAddingExitingToTimeline, 0);
      break;
    case 'exiting':
      tl.fromTo(node, 1, { opacity: 1 }, { opacity: 0 });
      tl.call(done);
      break;
  }
}

export function instant(tl, node, status, delayIn, done) {
  /* eslint-disable default-case */
  switch (status) {
    case 'entering':
      hide(node);
      const later = () => {
        tl.delay(delayIn ? delayIn : 0);
        tl.set(node, { display: '' });
        tl.call(done);
      };
      window.setTimeout(later, 0);
      break;
    case 'exiting':
      done();
      break;
  }
}
