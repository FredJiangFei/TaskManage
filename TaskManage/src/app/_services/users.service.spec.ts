import { map, take } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';
import { assert } from 'chai';
import { interval } from 'rxjs';


let scheduler;
describe('Observable', () => {
  beforeEach(() => {
    scheduler = new TestScheduler(assert.deepEqual.bind(assert));
  });

  it('should parse marble diagrams', () => {
     const source = '--a--b--|';
     const expected = '--a--b--|';

     const source$ = scheduler.createColdObservable(source);
     scheduler.expectObservable(source$).toBe(expected);
     scheduler.flush();
  });

  it('should work with map operator', () => {
     const source = '--a--b--|';
     const expected = '--a--b--|';

     const source$ = scheduler.createColdObservable(source, {a: 1, b: 3});
     scheduler.expectObservable(source$.pipe(map((n: number) => n * 2))).toBe(expected, {a: 2, b: 6});
     scheduler.flush();
  });

  it('create virtual time', () => {
     const time = scheduler.createTime('-----|');
     assert.equal(50, time);
  });

  it('interval in TestScheduler', () => {
     const source$ = interval(10, scheduler).pipe(take(4), map(x => x.toString()));
     const expected = '-012(3|)';

     scheduler.expectObservable(source$).toBe(expected);
     scheduler.flush();
  });
});
