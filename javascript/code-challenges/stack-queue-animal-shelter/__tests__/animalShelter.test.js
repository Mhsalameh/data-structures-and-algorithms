'use strict';
const AnimalShelter = require('../animalShelter');

describe('testing AnimalShelter class', () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('testing AnimalShelter initialization', () => {
    let shelter = new AnimalShelter();
    expect(shelter.storage).toEqual([]);
    expect(shelter.front).toBeNull();
  });
  it('testing enqueue', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue({ id: 1, type: 'cat' });
    expect(shelter.storage).toEqual([{ id: 1, type: 'cat' }]);
    expect(shelter.front).toEqual({ id: 1, type: 'cat' });
    shelter.enqueue({ id: 2, type: 'dog' });
    expect(shelter.storage).toEqual([
      { id: 1, type: 'cat' },
      { id: 2, type: 'dog' },
    ]);
    expect(shelter.front).toEqual({ id: 1, type: 'cat' });
    shelter.enqueue({ id: 3, type: 'monkey' });
    expect(consoleSpy).toHaveBeenCalledWith(
      'animal can be either a dog or a cat object.'
    );
  });
  it('testing dequeue', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue({ id: 1, type: 'cat' });
    shelter.enqueue({ id: 2, type: 'cat' });
    shelter.enqueue({ id: 3, type: 'dog' });
    shelter.enqueue({ id: 4, type: 'dog' });
    let pref1 = shelter.dequeue('dog');
    expect(pref1).toEqual({ id: 3, type: 'dog' });
    expect(shelter.storage).toEqual([
      { id: 1, type: 'cat' },
      { id: 2, type: 'cat' },
      { id: 4, type: 'dog' },
    ]);
    expect(shelter.front).toEqual({ id: 1, type: 'cat' });
    pref1 = shelter.dequeue('cat');
    expect(pref1).toEqual({ id: 1, type: 'cat' });
    expect(shelter.storage).toEqual([
      { id: 2, type: 'cat' },
      { id: 4, type: 'dog' },
    ]);
    expect(shelter.front).toEqual({ id: 2, type: 'cat' });
    pref1 = shelter.dequeue('monkey');
    expect(pref1).toBeNull();
  });
  it('testing dequeue from empty storage', () => {
    let shelter = new AnimalShelter();
    shelter.dequeue('cat');
    expect(consoleSpy).toHaveBeenCalledWith('exception');
  });
  it('testing dequeue with unavailable pref', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue({ id: 1, type: 'cat' });
    let pref1 = shelter.dequeue('dog');
    expect(pref1).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalledWith('dog is not available');
  });
});
