# zion-common-utils

> zion-common-utils is a util lib for nodejs
> 
> it has many convenient method to help you in daily develop

## installation

```bash
npm install zion-common-util
```

## usage

retry

```typescript
import { RetryUtil } from "zion-common-utils";

RetryUtil.retry(fn, { timeout: 5e3 })
```

```typescript
import { RetryUtil } from "zion-common-utils";

RetryUtil.retry(fn, { timeout: 5e3, interval: 2e3 })
```

```typescript
import { RetryUtil } from "zion-common-utils";

RetryUtil.retry(fn, { max: 10, interval: 2e3 })
```

get ip

```typescript
import { NetUtil } from "zion-common-utils";

let ip: string = NetUtil.getLocalIp();
```

json format

```typescript
import { JsonUtil } from "zion-common-utils";

let objFormat: string = JsonUtil.format(obj);
```

file download

```typescript
import { FileUtil } from "zion-common-utils";

FileUtil.download(url, dir);
```

sleep

```typescript

```
