let line = new TimelineMax()
let  topText = new TimelineMax()
let  bottomText = new TimelineMax()
let  brill = new TimelineMax()
// let top_text = new TimelineMax();
// let top_text = new TimelineMax();
line
  .from( $('.logo__line'), 1.5, {
    // delay: 4,
    ease:"circ.out",
    x: '-100%',
    opacity:0,
  } )
  .from( $('.logo__line'), 1, {
    // delay: 1.5,
    ease:"circ.out",
    x: '100%',
    opacity:1,
  } )

  

topText
  .from( $('.logo__top-text'), 1.5, {
    delay: .1,
    ease:"circ.out",
    opacity:0,
    y:'-5%'
  } )
  .to( $('.logo__top-text'), 1.5, {
    ease:"circ.out",
    opacity:0,
    y:'-5%'
  } )
  // .from( $('.logo__top-text'), 1, {
  //   // delay: .5,
  //   ease:"circ.out",
  //   opacity:1,
  //   y:'5%'
  // } )

  brill
  .from( $('.logo__brill'), 1.5, {
    delay:.2,
    ease:"circ.out",
    y: '-100%',
  } )
  .to( $('.logo__brill'), 1.5, {
    // delay:.2,
    ease:"circ.out",
    y: '-100%',
    opacity:0,
  } )

  bottomText
  .from( $('.bottom-text'), 1.5, {
    delay: .3,
    ease:"circ.out",
    opacity:0,
    y:'5%'
  } )
  .to( $('.bottom-text'), 1.5, {
    // delay: .3,
    ease:"circ.out",
    opacity:0,
    y:'5%'
  } )
  // .from( $('.bottom-text'), 1, {
  //   delay: 2,
  //   ease:"circ.out",
  //   opacity:1,
  //   y:'-5%'
  // } )

  // .from( $('.logo__brill'), .5, {
  //   delay:1,
  //   ease:"circ.out",
  //   opacity:1,
  //   y: '100%',
  // } )
  // .from( $('.logo__line'), 1, {
  //   // delay: 4,
  //   ease:"circ.out",
  //   x: '100%',
  //   opacity:1,
  // } )

  // .from( $('.logo__top-text'), 1, {
  //   ease:"circ.out",
  //   opacity:1,
  // } )
  // .from( $('.bottom-text'), 1, {
  //   ease:"circ.out",
  //   opacity:1,
  // } )

  // .from( $('.logo__brill'), .5, {
  //   // delay: 0,
  //   ease:"circ.out",
  //   opacity:1,
  // } )

  

 

  
	// .from( $('.logo__r'), 2,{
	// 	rotation: 18,
	// 	transformOrigin: "100% 50%"
	// },"-=1.5")
	// .from( $('.logo__i'), 2, {
	// 	y: "100%"
	// },"-=1.5")
	// .from( $('.logo__t-top'), 2, {
	// 	x: "100%"
	// },"-=1.5")
	// .from( $('.logo__t-bottom'), 2, {
	// 	y: "-100%"
	// },"-=1.5")
	// .from( $('.logo__y'), 2, {
	// 	y: "100%"
	// },"-=2");
