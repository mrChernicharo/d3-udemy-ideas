/*
*    main.js
*    Mastering Data Visualization with D3.js
*    Project 2 - Gapminder Clone
*/
const sliderEl = document.querySelector('#slider')
sliderEl.addEventListener('change', (d,i) => {
	console.log(d)
})

d3.json("data/data.json").then(function(data){
	console.log(data);
})