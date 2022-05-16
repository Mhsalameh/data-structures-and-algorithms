'use strict';

const { HashMap, repeatedWord } = require('../hashmap');
const LinkedList = require('../ll');

describe('testing hashmap', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'error').mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('testing creating new hashmap', () => {
    const hashmap01 = new HashMap(3);
    expect(hashmap01).toBeInstanceOf(HashMap);
    expect(hashmap01.size).toBe(3);
    expect(hashmap01.map.length).toBe(3);
  });

  it('testing hash(key) method (getting the index right)', () => {
    const hashmap01 = new HashMap(3);
    let idx = hashmap01.hash('dog');
    expect(idx).toBe(1);
  });

  it('testing set method', () => {
    const hashmap01 = new HashMap(3);
    hashmap01.set('cat', 'animal');
    let idx = hashmap01.hash('cat');
    expect(hashmap01.map[idx]).toBeInstanceOf(LinkedList);
    expect(hashmap01.map[idx].head.value).toStrictEqual({ cat: 'animal' });
  });

  it('testing constains method', () => {
    const hashmap01 = new HashMap(3);
    expect(hashmap01.contains('cat')).toBeFalsy();
    hashmap01.set('cat', 'animal');
    hashmap01.set('ahmad', 'human');
    hashmap01.set('door', 'object');
    expect(hashmap01.contains('table')).toBeFalsy();
    expect(hashmap01.contains('cat')).toBeTruthy();
  });

  it('testing get method', () => {
    const hashmap01 = new HashMap(3);
    expect(hashmap01.get('cat')).toStrictEqual(null);
    expect(hashmap01.get('ahmad')).toStrictEqual(null);
    expect(hashmap01.get('door')).toStrictEqual(null);
    expect(hashmap01.get('bed')).toStrictEqual(null);
    hashmap01.set('cat', 'animal');
    expect(hashmap01.get('ahmad')).toStrictEqual(null);
    hashmap01.set('ahmad', 'human');
    expect(hashmap01.get('door')).toStrictEqual(null);
    hashmap01.set('door', 'object');
    expect(hashmap01.get('bed')).toStrictEqual(null);
    hashmap01.set('bed', 'object');
    expect(hashmap01.get('cat')).toStrictEqual('animal');
    expect(hashmap01.get('ahmad')).toStrictEqual('human');
    expect(hashmap01.get('door')).toStrictEqual('object');
    expect(hashmap01.get('bed')).toStrictEqual('object');
  });

  it('testing keys method', () => {
    const hashmap01 = new HashMap(3);
    expect(hashmap01.keys()).toBeNull();
  });

  it('testing finding repeated words function', () => {
    let string =
      'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    expect(repeatedWord(string)).toBe('summer');
    string =
      'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    expect(repeatedWord(string)).toBe('it');
    string='Once upon a time, there was a brave princess who...';
    expect(repeatedWord(string)).toBe('a');
    string=1;
    expect(repeatedWord(string)).toBeUndefined();
    string='There are no repeated words here..';
    expect(repeatedWord(string)).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalledWith('input is not a string');
    expect(consoleSpy).toHaveBeenCalledWith('no repeated words found');
  });
});
