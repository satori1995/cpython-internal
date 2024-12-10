document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.content');
    if (!content) return;
    const headers = content.querySelectorAll('h2, h3');
    if (headers.length === 0) return;

    // 创建导航按钮
    const navButton = document.createElement('div');
    navButton.className = 'nav-button';
    navButton.textContent = '标题导航';

    // 创建导航容器
    const toc = document.createElement('div');
    toc.className = 'right-toc';
    const tocList = document.createElement('ul');
    toc.appendChild(tocList);

    // 添加导航内容
    headers.forEach(header => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = header.textContent;
        a.href = `#${header.id}`;
        
        if (header.tagName === 'H3') {
            li.classList.add('toc-h3');
        } else {
            li.classList.add('toc-h2');
        }
        
        li.appendChild(a);
        tocList.appendChild(li);
        
        a.addEventListener('click', (e) => {
            e.preventDefault();
            header.scrollIntoView({ behavior: 'smooth' });
            window.location.hash = header.id;
        });
    });

    // 添加悬浮事件
    navButton.addEventListener('mouseenter', () => {
        toc.style.display = 'block';
    });

    toc.addEventListener('mouseleave', () => {
        toc.style.display = 'none';
    });

    // 添加到页面
    document.body.appendChild(navButton);
    document.body.appendChild(toc);
});


window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true
  }
};
