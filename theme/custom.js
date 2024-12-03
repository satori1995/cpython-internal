document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.content');
    if (!content) return;
    const headers = content.querySelectorAll('h2, h3');
    if (headers.length === 0) return;

    const toc = document.createElement('div');
    toc.className = 'right-toc';  // 新类名
    const tocList = document.createElement('ul');
    toc.appendChild(tocList);

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

    // 添加到右侧而不是 content 内
    document.body.appendChild(toc);
});