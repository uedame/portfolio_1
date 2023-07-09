let py = 0;
section_top_array = [];
const section = document.querySelectorAll("section");
console.log(section);
section.forEach((data) => {
		// section要素の上部の位置から300px上の位置を追加、、わかりずらかったらごめん
	section_top_array.push(data.offsetTop-400);
})
console.log(section_top_array);

//addEventListener("scroll")でスクロール時のイベント取得
window.addEventListener("scroll", () => {
	// ページ上部のＹ値を取得
	py = window.pageYOffset;
	// console.log(py);

	let m = 0;
	while (m < section.length) {
		// ページ上部のＹ値とsection要素のY値を比較
		if (section_top_array[m] <= py) {
			if (m % 2 == 0) {
				section[m].classList.add('rightSlide')
			} else {
				section[m].classList.add('leftSlide')
			}
		}

		// if (section_top_array[m] >= py) {
		// 	if (m % 2 == 0) {
		// 		section[m].classList.remove('rightSlide')
		// 	} else {
		// 		section[m].classList.remove('leftSlide')
		// 	}
		// }
		m++
	}
})