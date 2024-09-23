import sum from "./index.js";
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

  describe("Operand harus bertipe number", () => {
    it("Hasil harus 0 jika operand A bukan number", () => {
      const operandA = "1";
      const operandB = 4;

      const actualValue = sum(operandA, operandB);

      const expectedValue = 0;
      assert.equal(actualValue, expectedValue);
    });
    it("Hasil harus 0 jika operand B bukan number", () => {
      const operandA = 1;
      const operandB = "4";

      const actualValue = sum(operandA, operandB);

      const expectedValue = 0;
      assert.equal(actualValue, expectedValue);
    });
    it("Hasil harus 0 jika kedua operand bukan number", () => {
      const operandA = "1";
      const operandB = "4";

      const actualValue = sum(operandA, operandB);

      const expectedValue = 0;
      assert.equal(actualValue, expectedValue);
    });
  });

  describe("Operand tidak boleh negatif", () => {
    it("Hasil harus 0 jika operand A negatif", () => {
      const operandA = -1;
      const operandB = 5;

      const actualValue = sum(operandA, operandB);

      const expectedValue = 0;
      assert.equal(actualValue, expectedValue);
    });

    it("Hasil harus 0 jika operand B negatif", () => {
      const operandA = 5;
      const operandB = -1;

      const actualValue = sum(operandA, operandB);

      const expectedValue = 0;
      assert.equal(actualValue, expectedValue);
    });

    it("Hasil harus 0 jika kedua operand negatif", () => {
      const operandA = -1;
      const operandB = -1;

      const actualValue = sum(operandA, operandB);

      const expectedValue = 0;
      assert.equal(actualValue, expectedValue);
    });
  });
});
