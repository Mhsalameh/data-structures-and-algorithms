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

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## API

- set: This method should hash the key, and set the key and value pair in the table, handling collisions as needed. Should a given key already exist, replace its value from the value argument given to this method.
- get Returns Value associated with that key in the table
- contains Returns Boolean, indicating if the key exists in the table already.
- keys Returns Collection of keys
- hash(key) Returns Index in the collection for that key