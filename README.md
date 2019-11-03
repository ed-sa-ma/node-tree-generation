# Node tree generation

## First part
Exercise about data structure re-formatting. 

### Input:
```
[
  { name: "Tom", id: "uuid0" },
  { name: "Sam", id: "uuid1", parent: "uuid2" },
  { name: "Mary", id: "uuid2", parent: "uuid0" },
  ...
]
```

### Output:
```
[
  {
    name: "Tom",
    id: "uuid0",
    children: [
      {
        name: "Mary",
        id: "uuid2",
        children: [{ name: "Sam", id: "uuid1" }, ...]
      },
      ...
    ]
  },
  ...
]
```

## Second part

Render resulting tree in as a list of expandable/collapsable nodes in the page.

