describe('matchers-loader', function() {
    it("sinon", function() {
        expect(sinon).toBeDefined();
    });

    it("chai", function() {
        expect(chai).toBeDefined();
    });

    it("jasmine-ajax", function() {
        expect(jasmine.Ajax).toBeDefined();
    });

    it("jamsine-jquery", function() {
        expect(expect()).toEqual(jasmine.objectContaining({
            toHaveClass: jasmine.any(Function)
        }));
    });
});
