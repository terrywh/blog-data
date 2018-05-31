(function(doc, win) {
	let app = new Vue({
		el: "#app",
		mounted: function() {
			if(!this.$refs.waterfall) return;
			let wfs = Array.from(this.$refs.waterfall.querySelectorAll(".waterfall-item")),
				chs, // 各列高度
				idx = 0, // 当前列
				wfi,
				rem = parseInt( getComputedStyle(doc.documentElement).fontSize );
			if(doc.body.clientWidth > 1200) {
				chs = [0, 0, 0, 0];
			}else if(doc.body.clientWidth > 992) {
				chs = [0, 0, 0];
			}else{
				chs = [0]
			}
			console.log(chs)
			while(wfs.length > 0) {
				let wfi = wfs.shift();
				wfi.style.left = 0.5 + idx + idx * 20 + "rem";
				console.log(chs[idx], rem, 0.5 * rem);
				wfi.style.top  = chs[idx] + "px";
				wfi.style.opacity = "1";
				chs[idx] += wfi.offsetHeight + 1 * rem;
				idx = (idx + 1) % chs.length;
			}
			this.$refs.waterfall.style.height = Math.max.apply(Math, chs) + "px";
		},
		methods: {
			toggleNavbar: function() {
				let nb = this.$refs.navbar;
				if(nb.classList.contains("collapse")) {
					nb.classList.remove("collapse");
					nb.classList.add("collapsing");
					setTimeout(() => {
						nb.style.height = "160px";
						setTimeout(() => {
							nb.classList.remove("collapsing");
						},360);
					}, 1);
				}else{
					nb.classList.add("collapsing");
					setTimeout(() => {
						nb.style.height = "0px";
						setTimeout(() => {
							nb.classList.remove("collapsing");
							nb.classList.add("collapse");
						}, 360);
					},1);
				}
			},
		},
	});
})(document, window);
