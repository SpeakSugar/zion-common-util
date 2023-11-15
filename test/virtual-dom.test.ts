/**
 * @jest-environment jsdom
 */

it('virtual-dom test', function () {
    // 虚拟 DOM 数据
    /**
     * <div id='counter-app' class='container'>
     *     <h1>Counter</h1>
     *     <p>Count: 0</p>
     *     <button onclick=incrementCount>Increment</button>
     * </div>
     */
    const virtualDOM = {
        type: 'div',
        props: {
            id: 'counter-app',
            className: 'container',
        },
        children: [
            {
                type: 'h1',
                props: null,
                children: ['Counter']
            },
            {
                type: 'p',
                props: null,
                children: ['Count: 0']
            },
            {
                type: 'button',
                props: {
                    onClick: incrementCount
                },
                children: ['Increment']
            }
        ]
    };

    // 创建 root 节点
    let rootElement = document.createElement(`div`);
    rootElement.id = `app`;
    document.body.appendChild(rootElement);

    // 渲染虚拟 DOM 到实际 DOM
    function render(element: any, container: any) {
        if (typeof element === 'string') {
            container.appendChild(document.createTextNode(element));
        } else if (typeof element === 'object') {
            const el = document.createElement(element.type);
            for (let key in element.props) {
                if (key.startsWith('on')) {
                    el.addEventListener(key.substring(2).toLowerCase(), element.props[key]);
                } else {
                    el.setAttribute(key, element.props[key]);
                }
            }
            if (element.children) {
                element.children.forEach((child: any) => render(child, el));
            }
            container.appendChild(el);
        }
    }

    // 初始化
    render(virtualDOM, rootElement);

    // 更新计数器的值
    let count = 0;
    function incrementCount() {
        count++;
        const updatedVirtualDOM = {
            ...virtualDOM,
            children: virtualDOM.children.map(child => {
                if (child.type === 'p') {
                    return {
                        ...child,
                        children: [`Count: ${count}`]
                    };
                }
                return child;
            })
        };

        // 重新渲染虚拟 DOM
        render(updatedVirtualDOM, rootElement);
    }
});

it('dom test', function () {
    let divElement = document.createElement(`div`);
    divElement.id = `app`
    document.body.appendChild(divElement);
    let elementById = document.getElementById(`app`);
    console.log(elementById);
});
