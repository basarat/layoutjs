// https://github.com/Polymer/layout/blob/master/layout.html
/** TODO: support other browser prefixes */
var extend = Object.create.bind(Object);
exports.flexRoot = {
    display: 'flex'
};
var inline = {
    display: 'inline-flex'
};
exports.horizontal, exports.vertical, exports.horizontalReverse, exports.verticalReverse;
exports.horizontal = extend(exports.flexRoot, {
    flexDirection: 'row'
});
exports.horizontalReverse = extend(exports.flexRoot, {
    flexDirection: 'row-reverse'
});
exports.vertical = extend(exports.flexRoot, {
    flexDirection: 'column'
});
exports.verticalReverse = extend(exports.flexRoot, {
    flexDirection: 'column-reverse'
});
exports.wrap = {
    flexWrap: 'wrap'
};
exports.wrapReverse = {
    flexWrap: 'wrap-reverse'
};
exports.flexAuto = {
    flex: '1 1 auto'
};
exports.flexNone = {
    flex: 'none'
};
exports.flex = {
    flex: 1
};
exports.flex1 = exports.flex;
exports.flex2 = {
    flex: 2
};
exports.flex3 = {
    flex: 3
};
exports.flex4 = {
    flex: 4
};
exports.flex5 = {
    flex: 5
};
exports.flex6 = {
    flex: 6
};
exports.flex7 = {
    flex: 7
};
exports.flex8 = {
    flex: 8
};
exports.flex9 = {
    flex: 9
};
exports.flex10 = {
    flex: 10
};
exports.flex11 = {
    flex: 11
};
exports.flex12 = {
    flex: 12
};
exports.start = {
    alignItems: 'flex-start'
};
exports.center = {
    alignItems: 'center'
};
exports.end = {
    alignItems: 'flex-end'
};
exports.startJustified = {
    justifyContent: 'flex-start'
};
exports.centerJustified = {
    justifyContent: 'center'
};
exports.endJustified = {
    justifyContent: 'flex-end'
};
exports.aroundJustified = {
    justifyContent: 'space-around'
};
exports.justified = {
    justifyContent: 'space-between'
};
exports.centerCenter = extend(exports.center, exports.centerJustified);
