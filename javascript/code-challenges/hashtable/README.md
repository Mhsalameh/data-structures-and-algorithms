# Hashtables

The key idea of Hash Table is to use a hash function to map keys to buckets. To be more specific,

When we insert a new key, the hash function will decide which bucket the key should be assigned and the key will be stored in the corresponding bucket;
When we want to search for a key, the hash table will use the same hash function to find the corresponding bucket and search only in the specific bucket.

## Challenge

Implement a Hashtable Class with the following methods:

- set
- Arguments: key, value
- Returns: nothing
- This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
- Should a given key already exist, replace its value from the value argument given to this method.
- get
- Arguments: key
- Returns: Value associated with that key in the table
- contains
- Arguments: key
- Returns: Boolean, indicating if the key exists in the table already.
- keys
- Returns: Collection of keys
- hash
- Arguments: key
- Returns: Index in the collection for that key

## Approach & Efficiency

- **HashMap class**:

  - T:O(1) --> to create the HashMap there is no iteration
  - S:O(n) --> we created a new array of size n

- **hash method**:

  - T:O(n) --> we are iterating an n = string.length number of time to find the indx val
  - S:O(1) --> we didn't add anything new to the memory

- **Set method**:

  - T:O(n) --> we are iterating throught a linked list of length n
  - S:O(1) --> we are only adding a new node or new linked list of one value

- **contains method**:

  - T:O(n) --> we are iterating through a linked list of length = n
  - S:O(1) --> we didn't add anything new to the memory

- **get method**:

  - T:O(n) --> we are iterating through a linked list of length = n
  - S:O(1) --> we didn't use any additional space in memory

- **keys method**:
  - T:O(n2) --> we are iterating through the map array of lenght = n, and each time we will iterate though a linked list of length = n (worst case)
  - S:O(n) --> we created a new array of length = n

## API

- set: This method should hash the key, and set the key and value pair in the table, handling collisions as needed. Should a given key already exist, replace its value from the value argument given to this method.
- get Returns Value associated with that key in the table
- contains Returns Boolean, indicating if the key exists in the table already.
- keys Returns Collection of keys
- hash(key) Returns Index in the collection for that key
