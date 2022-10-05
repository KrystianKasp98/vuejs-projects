## Connect via cnd

```html
    <div id="app" v-cloak>
      {{fullName()}} <!--use vue instance method-->
    </div>
    ...
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="app.js"></script>
```

```javascript
// create vue instance
const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    }
  }
}).mount('#app'); // assocate vuejs app with html #app element
```


## Directives

```v-cloak``` - will remain on the element until the associated component instance is mounted.

example how to hide app before init:

```css
[v-cloak] {
  display: none;
}
```

```v-text``` - works by setting the element's textContent property, so it will overwrite any existing content inside the element.

```html
<span v-text="msg"></span>
<!-- same as -->
<span>{{msg}}</span>
```

```v-html``` - update the element's ```innerHTML```, contents of v-html are inserted as plain HTML

```html
<div v-html="html"></div>
```

```v-show``` - works by setting the ```display``` CSS property via inline styles, and will try to respect the initial display value when the element is visible. It also triggers transitions when its condition changes.

```html
<div v-show="5>4">hey boo</div> <!-- It will be displayed(display:block)-->
<div v-show="5<4">hey boo</div> <!-- It won't be displayed(display:none)-->
```

```v-if``` - Conditionally render an element or a template fragment based on the truthy-ness of the expression value.
When used together, v-if has a higher priority than v-for

```html
<div v-if="5>4">hey boo</div> <!-- It will be in DOM-->
<div v-if="5<4">hey boo</div> <!-- It won't be in DOM-->
```

```v-else```

Denote the "else block" for v-if or a v-if / v-else-if chain.

```html
<div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>

```

```v-else-if```

Denote the "else if block" for v-if. Can be chained. Restriction: previous sibling element must have v-if or v-else-if.

```html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

```v-for```

Render the element or template block multiple times based on the source data. The directive's value must use the special syntax alias in expression to provide an alias for the current element being iterated on:

```html
<div v-for="item in items">
  {{ item.text }}
</div>
```

```html
<div v-for="(item, index) in items"></div>
<div v-for="(value, key) in object"></div>
<div v-for="(value, name, index) in object"></div>
```

The default behavior of v-for will try to patch the elements in-place without moving them. To force it to reorder elements, you should provide an ordering hint with the key special attribute:

```html
<div v-for="item in items" :key="item.id">
  {{ item.text }}
</div>
```