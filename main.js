const colors = (process.env.COLORS || '').split(',');
const classes = (process.env.CLASSES || '').split(',').join(' ');

const map = colors.reduce((map, color) => {
	map[color] = classes.replace(/color/g, color);
	return map;
}, {});

console.log(map);