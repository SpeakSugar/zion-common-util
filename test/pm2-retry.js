// Example: pm2 重试熔断机制
// pm2 start test/pm2-retry.js
async function main() {
    await require("../zion-commonjs").PromiseUtil.sleep(2e3); // 增加启动时间, 避免重试被熔断
    throw new Error(`fxxk`);
}

main().catch((err) => {
    console.log(`xxxxxxx`)
    process.exit(1);
});
