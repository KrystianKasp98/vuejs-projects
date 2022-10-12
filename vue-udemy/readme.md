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

```v-html``` - update the element's ```innerHTML```, contents of v-html are inserted as plain HTML. risky (Cross Site Scripting XXS attack possible)

```js
data(){
  return {
    rawUrl: '<p><a href="https://google.com" target="_blank">Guugol</a></p>' //create html element
  }
}
```

```html
<!-- inejct rawUrl data into html file -->
<p v-html="rawUrl"></p>
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

```v-on``` - attach an event listener to the element

shortcut ```@event``` for example: ```@click```

modifiers:

.stop - call event.stopPropagation(). ```@event.stop```

.prevent - call event.preventDefault(). ```@event.prevent```

.capture - add event listener in capture mode.

.self - only trigger handler if event was dispatched from this element.

.{keyAlias} - only trigger handler on certain keys.

.once - trigger handler at most once.

.left - only trigger handler for left button mouse events.

.right - only trigger handler for right button mouse events.

.middle - only trigger handler for middle button mouse events.

.passive - attaches a DOM event with { passive: true }.

```html
<!-- method handler -->
<button v-on:click="doThis"></button>

<!-- dynamic event -->
<button v-on:[event]="doThis"></button>

<!-- inline statement -->
<button v-on:click="doThat('hello', $event)"></button>

<!-- shorthand -->
<button @click="doThis"></button>

<!-- shorthand dynamic event -->
<button @[event]="doThis"></button>

<!-- stop propagation -->
<button @click.stop="doThis"></button>

<!-- prevent default -->
<button @click.prevent="doThis"></button>

<!-- prevent default without expression -->
<form @submit.prevent></form>

<!-- chain modifiers -->
<button @click.stop.prevent="doThis"></button>

<!-- key modifier using keyAlias -->
<input @keyup.enter="onEnter" />

<!-- the click event will be triggered at most once -->
<button v-on:click.once="doThis"></button>

<!-- object syntax -->
<button v-on="{ mousedown: doThis, mouseup: doThat }"></button>
```

```v-bind``` - Dynamically bind one or more attributes, or a component prop to an expression.

Shorthand: : or . (when using .prop modifier)

modifiers:

.camel - transform the kebab-case attribute name into camelCase.

.prop - force a binding to be set as a DOM property. 3.2+

.attr - force a binding to be set as a DOM attribute. 3.2+

```html
<!-- bind an attribute -->
<img v-bind:src="imageSrc" />

<!-- dynamic attribute name -->
<button v-bind:[key]="value"></button>

<!-- shorthand -->
<img :src="imageSrc" />

<!-- shorthand dynamic attribute name -->
<button :[key]="value"></button>

<!-- with inline string concatenation -->
<img :src="'/path/to/images/' + fileName" />

<!-- class binding -->
<div :class="{ red: isRed }"></div>
<div :class="[classA, classB]"></div>
<div :class="[classA, { classB: isB, classC: isC }]"></div> <!-- in this case class has syntax {className: boolean}, if key is true then class is added to element-->

<!-- style binding -->
<div :style="{ fontSize: size + 'px' }"></div>
<div :style="[styleObjectA, styleObjectB]"></div>

<!-- binding an object of attributes -->
<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>

<!-- prop binding. "prop" must be declared in the child component. -->
<MyComponent :prop="someThing" />

<!-- pass down parent props in common with a child component -->
<MyComponent v-bind="$props" />

<!-- XLink -->
<svg><a :xlink:special="foo"></a></svg>
```

```v-bind``` - Create a two-way binding on a form input element or a component
Expects: varies based on value of form inputs element or output of components

Limited to:

```html
<input>
```

```html
<select>
```

```html
<textarea>
```

components

Modifiers:

.lazy - listen to change events instead of input

.number - cast valid input string to numbers

.trim - trim input

```v-slot``` - Denote named slots or scoped slots that expect to receive props.

Expects: JavaScript expression that is valid in a function argument position, including support for destructuring. Optional - only needed if expecting props to be passed to the slot.

```html
<!-- Named slots -->
<BaseLayout>
  <template v-slot:header>
    Header content
  </template>

  <template v-slot:default>
    Default slot content
  </template>

  <template v-slot:footer>
    Footer content
  </template>
</BaseLayout>

<!-- Named slot that receives props -->
<InfiniteScroll>
  <template v-slot:item="slotProps">
    <div class="item">
      {{ slotProps.item.text }}
    </div>
  </template>
</InfiniteScroll>

<!-- Default slot that receive props, with destructuring -->
<Mouse v-slot="{ x, y }">
  Mouse position: {{ x }}, {{ y }}
</Mouse>
```

```v-pre``` - Skip compilation for this element and all its children.

Inside the element with v-pre, all Vue template syntax will be preserved and rendered as-is. The most common use case of this is displaying raw mustache tags

```html
<span v-pre>{{ this will not be compiled }}</span>
```

```v-once``` - Render the element and component once only, and skip future updates. Does not expect expression

Details:

On subsequent re-renders, the element/component and all its children will be treated as static content and skipped. This can be used to optimize update performanc

```html
<!-- single element -->
<span v-once>This will never change: {{msg}}</span>
<!-- the element have children -->
<div v-once>
  <h1>comment</h1>
  <p>{{msg}}</p>
</div>
<!-- component -->
<MyComponent v-once :comment="msg"></MyComponent>
<!-- `v-for` directive -->
<ul>
  <li v-for="i in list" v-once>{{i}}</li>
</ul>
```

```v-memo``` - Memoize a sub-tree of the template. Can be used on both elements and components. The directive expects a fixed-length array of dependency values to compare for the memoization. If every value in the array was the same as last render, then updates for the entire sub-tree will be skipped. 

When using ```v-memo``` with ```v-for```, make sure they are used on the same element. ```v-memo``` does not work inside ```v-for```.

```html
<div v-memo="[valueA, valueB]">
  ...
</div>
```

binding html attributes:

default(bind as passed string)

```html
<p class="defaultString">
  <a href="https://google.com" target="_blank">hardcoded example</a>
</p>
```

bind by vue data(bind by value from data. In this case value from url), syntax:

```:attribute``` or ```v-bind:attribute```

```html
<p v-bind:class="defaultData">
  <a :href="url" target="_blank">dynamic example from vue data</a>
</p>
```

```:value``` vs ```v-model```

```html
        <input type="text" @input="updateLastName"><!-- :value just take value from data but, don't change passed data on input change, it's just passing data nothing more, value of input may be edited but It wont change data-->
        <input type="text" v-model="lastName">
```

```@input``` and ```:value``` vs ```v-model```

@input allow to pass method which can manipulate value of input and data of vue

```js
  methods: {
    updateLastName(event) {
      this.lastName = event.target.value;
    }
  }
```

```html
<input type="text" @input="updateLastName" :value="lastName"> <!--manipulate lastName by method, and show lastName as value-->
<input type="text" v-model="lastName"> <!-- manipulate lastName by passing lastName-->
```

## key modifiers

https://vuejs.org/guide/essentials/event-handling.html#key-modifiers

### Key Aliases

```.enter```

```.tab```

```.delete``` (captures both "Delete" and "Backspace" keys)

```.esc```

```.space```

```.up```

```.down```

```.left```

```.right```

### System Modifier Keys

```.ctrl```

```.alt```

```.shift```

```.meta```

example:

```html
<!-- Alt + Enter -->
<input @keyup.alt.enter="clear" />

<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">Do something</div>
```

```.number``` - parse string to number if possible

```html
<input type="text" v-model.number="age"> <!--returns number if possible without, .number it will return always string-->
```

```.lazy``` - modify data when user stops writting(input lost focus) instead while user is writting

```html
<input type="text" v-model.lazy.trim="firstName"> <!-- trim will remove all white spaces from start and from end, spaces between words wont be changed-->
```

### computed
every app state change, all methods or data used in html will rerender for example:

```js
  methods: {
    fullName() {
      console.log('full name method was called!');
      return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`;
    },
    ...
  }
```

```html
  <p>
    {{fullName()}}
  </p>
```

```fullName``` method will be fired always when app state change

but it's possible to reduce useless re-rendering by using ```computed``` property and passing ```fullName``` method here:

```js
  {computed: {
    fullName() {
      console.log("full name method was called!");
      return `${this.firstName} ${
        this.middleName
      } ${this.lastName.toUpperCase()}`;
    }
    ...
  }
```

and change a little a html file(just delete parentheses), vue treats ```computed``` values as ```data``` not a ```method```!!

```html
  <p>
    {{fullName}}
  </p>
```

### watchers(watch)

Similar to useEffect in react :D, just listening on passed ```data``` in case below on ```age```. Function gets two arguments ```new``` and ```old``` value, it will fired when ```age``` will change

```js
  {
    watch: {
    age(newVal, oldVal) {
      setTimeout(() => this.age = 20, 3000);
    }
  }
```

### Binders

```:class``` binds data from vue app as class(it may be dynamic string or dynamic object with className as key and boolean as value)

```html
    <select v-model="selectedColor">
      <option value="">White</option>
      <option value="text-black">Black</option>
      <option value="text-orange">Orange</option>
    </select>

    <div class="circle" :class="[circle_classes, color_classes]">
      Hi!
    </div>
```

```js
{
  data() {
    return {
      isPurple: false,
      selectedColor: "",
      ...
    }, computed: {
    circle_classes() {
      return { purple: this.isPurple };
    },
    color_classes(newVal) {
      return {
        [`${this.selectedColor}`]: true,
      };
    }
  }...
}
```

```:css``` binds data from app as css(object only, similar to ```:class```)

```html
    <input type="number" v-model="size">

    <div class="circle" :class="[circle_classes, color_classes]" :style="size_css">
```

```js
  {
    data() {
    return {
      ...
      size: 150
    };
  }, computed: {
      ...
      size_css() {
        return {
          width: `${this.size}px`,
          height: `${this.size}px`
        }
      }
    }
  }
```

### iterations

dauble nested objects list

```js
{
  data() {
      return {
          birds: ['Pigeons', 'Eagles', 'Doves', 'Parrots'],
          people: [
              { name: 'John', age: 20 },
              { name: 'Rick', age: 18 },
              { name: 'Amy', age: 33 }
          ]
      }
  }
}
```

```html
  <li v-for="(person) in people">
    <div v-for="(value, key, index) in person">
      {{key}} - {{value}} - Index: {{index}}
    </div>
  </li>
```


### key attribute

key attribute allows vuejs to detect elements related wtih specified object/item from list without key vuejs js need decide by self how to handle list changes.

In example below if we fill input, then change order of list the input will stay in the same position instead follow the list items

```html
<div class="card" v-for="person in people">
  <h3>{{person.name}}</h3>
  <p>{{person.message}}</p>
  <input type="text">
</div>
```

before move without key

![before move](https://i.snipboard.io/hDTRfU.jpg)

after move without key

![after move](https://snipboard.io/sXLYZr.jpg)

same example but with the key:

```html
  <div class="card" v-for="person in people" :key="person.name">
    <h3>{{person.name}}</h3>
    <p>{{person.message}}</p>
    <input type="text">
  </div>
```

before move with key

![before move](https://snipboard.io/gEJ0A3.jpg)

after move with key

![after move](https://snipboard.io/TqQz9E.jpg)

### Lifecycle hooks

![Livecycle schema](https://snipboard.io/XPfCiM.jpg)

lifecycle example in js:

```js
let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  // instance creating
  beforeCreate() {
    console.log('beforeCreate() function called!', this.message, new Date().getTime());
  },
  created() {
    console.log(
      "created() function called!",
      this.message,
      new Date().getTime()
    );
  },
  // component mounting
  beforeMount() {
    console.log(
      "beforeMount() function called!",
      this.$el,
      new Date().getTime()
    );
  },
  mounted() {
    console.log('mounted() function called!'', this.$el, new Date().getTime());
  },
  // data changing
  beforeUpdate() {
    console.log('beforeUpdate() function called!');
  },
  updated() {
    console.log('updated() function called!');
  },
  // unmounting
  beforeUnmount() {
    console.log('beforeUnmount() function called!');
  }, 
  unmounted() {
    console.log('unmounted() function called!');
  }
});
```
