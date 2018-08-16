# react-transition-group + GSAP integration example

## What is this?
This is a showcase for integration of `react-transition-group` and GSAP.
Please pay attention that it uses RTG version with my PR #396, not yet published on npm. At the moment you can add it to youк project with `yarn add https://github.com/mvasin/react-transition-group/tarball/tmp-build`, later it will hopefully land on npm (look for version >= 3.0).

## Try it
`git clone https://github.com/mvasin/rtg-gsap-example && yarn && yarn start`.

## Caveats
Pay attention to how gracefully it works when in the middle of transition you force it to transition back (click the links while in transition!).

The biggest caveat I have encountered is that by the time GSAP declares timeline animations (like `tl.to(node, 1, {x: 10})`, the nodes MUST be in the DOM.

In React, where DOM nodes come and go, you really have to understand what's going on with your DOM nodes. If nodes are gone and then recreated, GSAP will silently wait for the duration of animation involving those lost nodes.

This will also happen to nodes specified by class or ids. Don't expect recreated nodes with the same ids/classes to be automatically hooked up by GSAP.

Avoiding this caveat unfortunately complicated the code. But it works nicely. It could be a bit simplier if we'd choose to keep and not to unmount all the components from routes we passed through, but I guess that will choke big apps.

## Questions are welcome
The repo was created for experimental and educational proposes, feel free to open an issue and ask whatever is unclear.
