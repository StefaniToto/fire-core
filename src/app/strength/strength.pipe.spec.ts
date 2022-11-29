import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  let pipe = new StrengthPipe();
  it('should display strong if strength is 10', () => {
    expect(pipe.transform(10)).toEqual('10 (strong)');
  });
});
