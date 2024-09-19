import { compileExpression } from 'filtrex';

it(`filtrex test`, () => {
    const data = [
        { id: 1, title: 'Task A', priority: 'High', completed: true },
        { id: 2, title: 'Important Task', priority: 'Low', completed: false },
        { id: 3, title: 'Another Important Task', priority: 'Medium', completed: false },
        { id: 4, title: 'Fxxk Task', completed: false },
    ];

    // 自定义模糊查询函数
    const filter = compileExpression('priority == "Low"');

    // 使用编译后的过滤器对数据进行筛选
    const filteredData = data.filter(filter);

    console.log(filteredData);
});
