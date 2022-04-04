# Usage

### Type 1

```md
$ npm i
$ node script.js -l sample.log test
```

### Type 2

```md
$ npm i
$ node script.js -l sample.log
Enter a search term
test
```

- Here `test` is the search term (in both types)
- `npm i` can be omitted if the libraries are already installed.

#### Flags supported

- `f` followed by a file name. This flag takes name of the log file. If not provided then a default file with name as file.log will be created.
