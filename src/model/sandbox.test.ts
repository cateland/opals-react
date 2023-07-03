import { describe, it, expect } from "vitest";
import { calculateWeight } from "./sandbox"
describe("weight calculation", () => {
    it("should at least return 1kg", () => {
        const result = calculateWeight(1,1,1);
        expect(result).toBe(1);
    })

    it("should provide proper calcultion based on the weight of sand", () => {
        const result = calculateWeight(1200, 300, 10);
        expect(result).toBe(5760);
    })
});
