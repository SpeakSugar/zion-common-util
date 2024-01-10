# zion-common-utils

> zion-common-utils is a util lib for nodejs
> 
> it has many convenient method to help you in daily develop

## installation

```bash
npm install zion-common-util
```

## usage

retry-util

```typescript
import { RetryUtil } from "zion-common-utils";

await RetryUtil.retry(fn, { timeout: 5e3 })
await RetryUtil.retry(fn, { timeout: 5e3, interval: 2e3 })
await RetryUtil.retry(fn, { max: 10, interval: 2e3 })
```

net-util

```typescript
import { NetUtil } from "zion-common-utils";

let ip: string = await NetUtil.getLocalIp();

let isConnected: boolean = await NetUtil.isConnected(`https://www.baidu.com`);
```

json-util

```typescript
import { JsonUtil } from "zion-common-utils";

let objFormat: string = JsonUtil.format(obj);
```

file-util

```typescript
import { FileUtil } from "zion-common-utils";

await FileUtil.download(url, dir);
await FileUtil.deleteFilesBefore7Days(dir);
const isExist = await FileUtil.isExist(file);
const files = await FileUtil.readAndSortFiles(dir);
```

gitlab-util

```typescript
import { GitlabUtil } from "zion-common-utils";

const gitlabUtil = new GitlabUtil(repository, branch, token);
const data: string = await gitlabUtil.readFile(path);
```

path-util

```typescript
import { PathUtil } from "zion-common-utils";

PathUtil.initRootPath(path);
PathUtil.getAbsolutePath(relativePath);
```

promise-util

```typescript
import { PromiseUtil } from "zion-common-utils";

await PromiseUtil.sleep(3e3);
await PromiseUtil.withTimeout(fn, 30e3);
```

string-util

```typescript
import { StringUtil } from "zion-common-utils";

StringUtil.substringToLastChar(origin, char);
StringUtil.substringToFirstChar(origin, char);
StringUtil.substringFromLastChar(origin, char);
StringUtil.substringFromFirstChar(origin, char);
```

process-util

```typescript
import { ProcessUtil } from "zion-common-utils";

const stdout = await ProcessUtil.exec(command, options)
```

array-util

```typescript
import { ArrayUtil } from "zion-common-utils";

const new_arr = ArrayUtil.deDuplicateX(arr, [str, str])
```

func-util

```typescript
import { FuncUtil } from "zion-common-utils";

await FuncUtil.ignoreError(async () => {});
```

singleton-factory

```typescript
import { SingletonFactory } from "zion-common-utils";

const person = SingletonFactory.getInstance(Person);
```

barrier

```typescript
import { Barrier } from "zion-common-utils";

// use GPT to get how to use barrier
```
