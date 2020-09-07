import { AlcoholPipe } from './alcohol.pipe';

describe('AlcoholPipe', () => {
  it('create an instance', () => {
    const pipe = new AlcoholPipe();
    expect(pipe).toBeTruthy();
  });
});
