var assert = chai.assert,
    expect = chai.expect;
suite("Testing rgb valores dentro del rango", function() {
    test("Test pasado", function() {
        expect(rgb("255", "255", "255")).to.equal("#FFFFFF")
    }), test("Test pasado", function() {
        expect(rgb("0", "0", "0")).to.equal("#000000")
    }), test("Test pasado", function() {
        expect(rgb(148, 0, 211)).to.equal("#9400D3")
    }), test("Test pasado", function() {
        expect(rgb(66, 134, 244)).to.equal("#4286F4")
    }), test("Test pasado", function() {
        expect(rgb(1, 1, 1)).to.equal("#010101")
    }), test("Test pasado", function() {
        expect(rgb(15, 15, 15)).to.equal("#0F0F0F")
    }), test("Test pasado", function() {
        expect(rgb(16, 16, 16)).to.equal("#101010")
    }), test("Test pasado", function() {
        expect(rgb(240, 240, 240)).to.equal("#F0F0F0")
    }), test("Test pasado", function() {
        expect(rgb(17, 17, 17)).to.equal("#111111")
    })
}), suite("Testing rgb valores fuera del rango 0 - 255", function() {
    test("Test pasado", function() {
        expect(rgb(255, 255, 300)).to.equal("#FFFFFF")
    }), test("Test pasado", function() {
        expect(rgb("500", 255, 255)).to.equal("#FFFFFF")
    }), test("Test pasado", function() {
        expect(rgb(-100, 0, 0)).to.equal("#000000")
    })
});