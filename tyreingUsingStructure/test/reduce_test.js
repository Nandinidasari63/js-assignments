import { reduceToNUmberOfTimesPresent,reduceToTotal } from "../src/reduce.js";
import {assertEquals,assertAlmostEquals,assertArrayIncludes} from "@std/assert";
Deno.test("1 => count of blues.",() => assertEquals(reduceToNUmberOfTimesPresent(["red", "blue", "red", "green", "red", "blue"],0,"blue"),2))
Deno.test("8 => count of miles.",() => assertEquals(reduceToTotal([[2, 3, 2], [4], [1, 1]], 0),13))
Deno.test("10 => count number of times dune returned.",() => assertEquals(reduceToNUmberOfTimesPresent(["Dune", "Dune", "Foundation", "Dune"],0,"Dune"),3));
Deno.test('is number equals',() => assertAlmostEquals(27,29,5));
Deno.test('is array equals',() => assertArrayIncludes([1,[6,7,[9,6],9],2],[1,[6,7,[9,6],9],2]));