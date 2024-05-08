// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isPhoneNumber1', () => {
  expect(isPhoneNumber("(858)539-6364)")).toBe(true);
  expect(isPhoneNumber("858-539-6364")).toBe(true);
});

test('isPhoneNumber2', () => {
  expect(isPhoneNumber("858-539-6364")).toBe(true);
});

test('isPhoneNumber3', () => {
  expect(isPhoneNumber("8585396364")).toBe(false);
});

test('isPhoneNumber4', () => {
  expect(isPhoneNumber("(858)5396364")).toBe(false);
});

test('isEmail1', () => {
  expect(isEmail("leh003@ucsd.edu")).toBe(true);
});

test('isEmail2', () => {
  expect(isEmail("michellely@gmail.com")).toBe(true);
});

test('isEmail3', () => {
  expect(isEmail("michellely.huang@gmail.com")).toBe(false);
});

test('isEmail4', () => {
  expect(isEmail("@gmail.com")).toBe(false);
});

test('isStrongPassword', () => {
  expect(isStrongPassword("Abc123bc")).toBe(true);
});

test('isStrongPassword', () => {
  expect(isStrongPassword("DW1230")).toBe(true);
});

test('isStrongPassword', () => {
  expect(isStrongPassword("12345")).toBe(false);
});

test('isStrongPassword', () => {
  expect(isStrongPassword("a")).toBe(false);
});

test('isDate', () => {
  expect(isDate("05/08/2024")).toBe(true);
});

test('isDate', () => {
  expect(isDate("03/07/2024")).toBe(true);
});

test('isDate', () => {
  expect(isDate("03-07-2024")).toBe(false);
});

test('isDate', () => {
  expect(isDate("2024-03-07")).toBe(false);
});

test('isHexColor', () => {
  expect(isHexColor("fff")).toBe(true);
});

test('isHexColor', () => {
  expect(isHexColor("#abc")).toBe(true);
});

test('isHexColor', () => {
  expect(isHexColor("#ab")).toBe(false);
});

test('isHexColor', () => {
  expect(isHexColor("#abcd")).toBe(false);
});