# not-support-ie-alert

A service which detect the browser , and show the not support IE alert.


## How to use ?

**Step 1** : Add the service link to the `html>head` as a script src.

```html
<script src="//<%=host%>/api/{version}/{description}"></script>
```

There are 2 param you should know:

- `version` :   
    The IE version that you don't want to supported.  eg: `5`,`6`,`7`,`8`.
- `description` (optional) :   
The infomation that you want to tell the visitor which should encode with `encodeURL()`. eg: `we%20are%20sorry.`</li>

**Step 2** : </b> That's all , what a happy life ^_^ .