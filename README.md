This is a showcase for integration of `react-transition-group` and GSAP.

Try it: `git clone https://github.com/mvasin/rtg-gsap-example && yarn && yarn start`.

The biggest caveat I had to find out is that by the time GSAP declares timeline animations (like `tl.to(node, 1, {x: 10})`, the nodes MUST be in the DOM.

In React, where DOM nodes come and go, you really have to understand what's going on with your DOM nodes. If nodes are gone and then recreated, GSAP will silently wait for the duration of animation involving those lost nodes.

It also relates to nodes specified by class or ids. Don't expect recreated nodes with the same ids/classes to be automatically hooked up by GSAP.

Avoiding the caveat above unfortunately complicated the code. But it works nicely. It could be a bit simplier if we choose to keep not to unmount passed routes, but I guess that's not gonna work for big apps (too heavy).

The repo was created for experimental and educational proposes, feel free to open an issue and ask whatever is unclear.