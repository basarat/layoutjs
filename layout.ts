// https://github.com/Polymer/layout/blob/master/layout.html
/** TODO: support other browser prefixes */

var extend = Object.create.bind(Object)

/** You don't need to use this generally. Prefer horizontal,vertical,horizontalReverse,verticalReverse */
export var flexRoot = {
    display: 'flex'
}

var inline = {
    display: 'inline-flex'
}

export var horizontal, vertical, horizontalReverse, verticalReverse
horizontal = extend(flexRoot, {
    flexDirection: 'row'
})
horizontalReverse = extend(flexRoot, {
    flexDirection: 'row-reverse'
})
vertical = extend(flexRoot, {
    flexDirection: 'column'
})
verticalReverse = extend(flexRoot, {
    flexDirection: 'column-reverse'
})

export var wrap = {
    flexWrap: 'wrap'
}
export var wrapReverse = {
    flexWrap: 'wrap-reverse'
}

export var flexAuto = {
    flex: '1 1 auto'
}

export var flexNone = {
    flex: 'none'
}

export var flex = {
    flex: 1
}

export var flex1 = flex;
export var flex2 = {
    flex: 2
}
export var flex3 = {
    flex: 3
}
export var flex4 = {
    flex: 4
}
export var flex5 = {
    flex: 5
}
export var flex6 = {
    flex: 6
}
export var flex7 = {
    flex: 7
}
export var flex8 = {
    flex: 8
}
export var flex9 = {
    flex: 9
}
export var flex10 = {
    flex: 10
}
export var flex11 = {
    flex: 11
}
export var flex12 = {
    flex: 12
}

/////////////////////////////
// Alignment in cross axis //
/////////////////////////////

export var start = {
    alignItems: 'flex-start'
}
export var center = {
    alignItems: 'center'
}
export var end = {
    alignItems: 'flex-end'
}

////////////////////////////
// Alignment in main axis //
////////////////////////////

export var startJustified = {
    justifyContent: 'flex-start'
};
export var centerJustified = {
    justifyContent: 'center'
}
export var endJustified = {
    justifyContent: 'flex-end'
}
export var aroundJustified = {
    justifyContent: 'space-around'
}
export var justified = {
    justifyContent: 'space-between'
}

////////////////////////////
// Alignment in both axes //
////////////////////////////

export var centerCenter = extend(center, centerJustified);
