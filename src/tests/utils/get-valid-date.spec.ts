import { expect, test } from "vitest";
import { getFutureDate } from "./get-valid-date";

test("should return a valid date mockup", () => {
    const year = new Date().getFullYear()
    expect(getFutureDate(`${year}-01-10`).getFullYear()).toEqual(2024)
});