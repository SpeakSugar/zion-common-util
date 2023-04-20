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
import { PromiseUtil } from "./promise-util";

await PromiseUtil.sleep(3e3);
```

string-util

```typescript
import { StringUtil } from "zion-common-utils";

StringUtil.substringToLastChar(origin, char);
StringUtil.substringToFirstChar(origin, char);
StringUtil.substringFromLastChar(origin, char);
StringUtil.substringFromFirstChar(origin, char);
```
