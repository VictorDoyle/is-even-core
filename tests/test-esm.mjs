import isEven from "../dist/esm/index.mjs";

function test(description, fn) {
  try {
    fn();
    console.log(`PASS: ${description}`);
  } catch (error) {
    console.log(`FAIL: ${description} - ${error.message}`);
  }
}

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(`${message}: expected ${expected}, got ${actual}`);
  }
}

function expectError(fn, message) {
  try {
    fn();
    throw new Error(`${message}: expected error but none was thrown`);
  } catch (error) {
    if (error.message.includes("expected error")) {
      throw error;
    }
  }
}

console.log("Testing ESM import...");

test("isEven(0) returns true", () => {
  assertEqual(isEven(0), true, "isEven(0)");
});

test("isEven(1) returns false", () => {
  assertEqual(isEven(1), false, "isEven(1)");
});

test("isEven(2) returns true", () => {
  assertEqual(isEven(2), true, "isEven(2)");
});

test("isEven(-2) returns true", () => {
  assertEqual(isEven(-2), true, "isEven(-2)");
});

test("isEven(-1) returns false", () => {
  assertEqual(isEven(-1), false, "isEven(-1)");
});

test('isEven("4") returns true', () => {
  assertEqual(isEven("4"), true, 'isEven("4")');
});

test('isEven("3") returns false', () => {
  assertEqual(isEven("3"), false, 'isEven("3")');
});

test('isEven("0") returns true', () => {
  assertEqual(isEven("0"), true, 'isEven("0")');
});

test("isEven(3.14) throws error", () => {
  expectError(() => isEven(3.14), "Float number should throw error");
});

test('isEven("abc") throws error', () => {
  expectError(() => isEven("abc"), "Non-numeric string should throw error");
});

test('isEven("3.14") throws error', () => {
  expectError(() => isEven("3.14"), "Float string should throw error");
});

test("isEven(null) throws error", () => {
  expectError(() => isEven(null), "Null should throw error");
});

test("isEven(undefined) throws error", () => {
  expectError(() => isEven(undefined), "Undefined should throw error");
});

console.log("ESM tests completed.");
