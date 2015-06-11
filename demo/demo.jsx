var tallVertical = layout.extend(layout.vertical,{height:'250px'});
var tallHorizontal = layout.extend(layout.horizontal,{height:'150px'});
var narrowHorizontal = layout.extend(layout.horizontal,{width:'220px'});

var content = 
<div>
  <h1>Pure Layout. Nothing more. Nothing less.</h1>
  <div><a href="https://github.com/basarat/layoutjs/blob/gh-pages/demo/demo.jsx">Source</a></div>
  <div><a href="http://plnkr.co/edit/T3N3xXk86ZHCD1iXNcJj?p=preview">Plnkr</a></div>  
  
  <h2 id="horizontal-and-vertical-layout">Horizontal and vertical layout<a class="permalink" title="Permalink" href="#horizontal-and-vertical-layout">#</a></h2>
  <p>
      When a container includes the <code>horizontal</code> or <code>vertical</code> style, it can become a flex container with the specified orientation
  </p>            
  <div className="demo" style={layout.horizontal}>
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
  </div>
  
  <h3 id="flexible-children" class="has-permalink">Flexible children<a class="permalink" title="Permalink" href="#flexible-children">#</a></h3>
  <p>Children of an element using the <code>layout</code> styles can use <code>flex</code> style to control their own sizing. For example:</p>
  <div className="demo" style={layout.horizontal}>
    <div>Alpha</div>
    <div style={layout.flex}>Beta (flex)</div>
    <div>Gamma</div>
  </div>
  
  <p>The same is true for children of <code>vertical</code> elements:</p>
  <p><strong>Note</strong>: for vertical layouts, the container needs to have a height for the children to flex correctly.</p>
  <div className="demo" style={tallVertical}>
    <div>Alpha</div>
    <div style={layout.flex}>Beta (flex)</div>
    <div>Gamma</div>
  </div>
  
  <p>Children elements can be told to take up more space by including a “flex ratio” with the <code>flex</code> style. A flex ratio is specified with a number: <em>1</em>, <em>2</em>, <em>3</em>, currently up to <em>12</em>.</p>
  <p>For example, to make “Gamma” 2x larger than “Beta” and “Alpha” 3x larger, use <code>flex2</code> and <code>flex3</code>, respectively:</p>
  <div className="demo" style={layout.horizontal}>
    <div style={layout.flex3}>Alpha</div>
    <div style={layout.flex}>Beta</div>
    <div style={layout.flex2}>Gamma</div>
  </div>
  
  <h3 id="cross-axis-alignment" class="has-permalink">Cross-axis alignment<a class="permalink" title="Permalink" href="#cross-axis-alignment">#</a></h3>
  <p>By default, children stretch to fit the cross-axis (e.g. <em>vertical</em> stretching in a <em>horizontal</em> layout).</p>
  <div className="demo" style={tallHorizontal}>
    <div>Stretch Fill</div>
  </div>
  
  <p>Position <em>across</em> the main axis (e.g. <em>vertically</em> in a <em>horizontal</em> layout) by adding <code>center</code> or <code>start</code> or <code>end</code>.</p>
  <div className="demo" style={layout.extend(tallHorizontal,layout.center)}>
    <div>Center</div>
  </div>
  <div className="demo" style={layout.extend(tallHorizontal,layout.start)}>
    <div>start</div>
  </div>
  <div className="demo" style={layout.extend(tallHorizontal,layout.end)}>
    <div>end</div>
  </div>
  
  <h2 id="justification" class="has-permalink">Justification<a class="permalink" title="Permalink" href="#justification">#</a></h2>
  <p>Justification controls the content position in the <em>main</em> axis. Use <code>startJustified</code> or <code>centerJustified</code> or <code>endJustified</code> or <code>aroundJustified</code> or <code>betweenJustified</code>.</p>
  <div className="demo" style={layout.extend(layout.horizontal,layout.startJustified)}>
    <div>start-justified</div>
    <div>start-justified</div>
    <div>start-justified</div>
  </div>
  <div className="demo" style={layout.extend(layout.horizontal,layout.centerJustified)}>
    <div>center-justified</div>
    <div>center-justified</div>
    <div>center-justified</div>
  </div>
  <div className="demo" style={layout.extend(layout.horizontal,layout.endJustified)}>
    <div>end-justified</div>
    <div>end-justified</div>
    <div>end-justified</div>
  </div>
  <div className="demo" style={layout.extend(layout.horizontal,layout.aroundJustified)}>
    <div>around-justified</div>
    <div>around-justified</div>
    <div>around-justified</div>
  </div>
  <div className="demo" style={layout.extend(layout.horizontal,layout.betweenJustified)}>
    <div>between-justified</div>
    <div>between-justified</div>
    <div>between-justified</div>
  </div>
  
  <h2 id="self-alignment" class="has-permalink">Self alignment<a class="permalink" title="Permalink" href="#self-alignment">#</a></h2>
  Alignment can also be set per-child (instead of using the layout containers rules):
  <div className="demo" style={tallHorizontal}>
    <div style={layout.selfStart}>selfStart</div>
    <div style={layout.selfCenter}>selfCenter</div>
    <div style={layout.selfEnd}>selfEnd</div>
    <div style={layout.selfStretch}>selfStretch</div>
    <div>Default is stretch</div>
  </div>
  
  <h2 id="wrapping" class="has-permalink">Wrapping<a class="permalink" title="Permalink" href="#wrapping">#</a></h2>
  <p>Wrapped layouts can be enabled with the <code>wrap</code> style.</p>
  <div className="demo" style={layout.extend(narrowHorizontal,layout.wrap)}>
    <div>Alpha</div>
    <div>Beta</div>
    <div>Gamma</div>
    <div>Delta</div>
  </div>
</div>
        
var Demo = React.createClass({
    render: function() {
        return content;
    }
});
 
React.render(<Demo />, document.getElementById('container'));