const cats = {
    raining: false,
    noise: "Meow",
    makeNoise: function () {
        if (this.raining) {
            console.log(this.noise);
        }
    }
};
cats.raining = true;
cats.makeNoise();
cats["test"] = [1, 2];
delete cats.noise;
console.log(cats)