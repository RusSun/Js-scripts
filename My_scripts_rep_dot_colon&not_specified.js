/*
Замена ".:" на '' пустой текст
Замена "не указано" на '' пустой текст
*/
document.body.innerHTML = document.body.innerHTML.replace(/\.:/g, '');
document.body.innerHTML = document.body.innerHTML.replace(/не указано/g, '');