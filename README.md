[![npm version](https://badge.fury.io/js/layoutjs.svg)](http://badge.fury.io/js/layoutjs) [![Greenkeeper badge](https://badges.greenkeeper.io/basarat/layoutjs.svg)](https://greenkeeper.io/)

# LayoutJS
An abstraction over flexbox with semantic names for enhanced readability and maintainability. Done using the CSSinJS pattern.

## Usage

```js
var layout = require('layoutjs');

var Demo = React.createClass({
    render: function() {
        return <div className="demo" style={layout.horizontal}>
                    <div>One</div>
                    <div>Two</div>
                    <div>Three</div>
               </div>;
}
```

Checkout the [complete demo](https://basarat.github.io/layoutjs/demo/)

And a [plnkr that you can mess with](http://plnkr.co/edit/T3N3xXk86ZHCD1iXNcJj?p=preview). 

## Inspiration
Inspired by [polymer layout.html](https://www.polymer-project.org/0.5/docs/polymer/layout-attrs.html).