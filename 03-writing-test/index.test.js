import { sum } from "./index.js";
import { describe, it } from "node:test";
import assert from "node:assert";

describe("Sum test", () => {
  it("Hasil penjumlahan harus benar", () => {
    const operandA = 2;
    const operandB = 3;

    const actualValue = sum(operandA, operandB);

    const expectedValue = 5;
    assert.equal(actualValue, expectedValue);
  });
});
