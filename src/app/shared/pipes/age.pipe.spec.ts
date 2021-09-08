import { AgePipe } from './age.pipe';

describe('AgePipe', () => {
  it('create an instance', () => {
    const pipe = new AgePipe();
    expect(pipe).toBeTruthy();
  });

  // it('shuould transform the date', () => {
  //   const pipe = new AgePipe();
  //   pipe.transform(new Date());
  //   expect(pipe).toBeTruthy();
  // });
});
