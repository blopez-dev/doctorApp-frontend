import { truncateString } from 'common/utils/string';

describe('Function that receives a string and a length and returns a trimmed string', () => {
  it('should return a truncated string by the supplied limit', () => {
    const count = 4;
    const text = 'string to testing';
    const expectedText = 'stri';

    const result = truncateString(text, count);

    expect(result).toBe(expectedText);
    expect(result.length).toBe(count);
  });
  it('should return the supplied string if the limit is greater than it', () => {
    const count = 30;
    const text = 'string for testing';

    const result = truncateString(text, count);

    expect(result).toBe(text);
  });
});
