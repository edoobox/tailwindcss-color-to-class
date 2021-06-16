# tailwindcss-color-to-class
Generates a JavaScript object with your colors as keys and desired tailwind classes as values. This makes it easier to add a color prop to your Vue.js components for instance without losing the ability to purge unused CSS before production.

## Example
```shell script
# Replaces the word 'color' in your classes with the names of the colors
COLORS=amber,blue,blueGray,gray,green,indigo,lime,orange,pink,yellow CLASSES=bg-color-100,text-color-800 node main.js

# Output
{
  amber: 'bg-amber-100 text-amber-800',
  blue: 'bg-blue-100 text-blue-800',
  blueGray: 'bg-blueGray-100 text-blueGray-800',
  gray: 'bg-gray-100 text-gray-800',
  green: 'bg-green-100 text-green-800',
  indigo: 'bg-indigo-100 text-indigo-800',
  lime: 'bg-lime-100 text-lime-800',
  orange: 'bg-orange-100 text-orange-800',
  pink: 'bg-pink-100 text-pink-800',
  yellow: 'bg-yellow-100 text-yellow-800'
}
```
