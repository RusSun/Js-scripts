/*
Замена ".:" на '' пустой текст
Замена "не указано" на '' пустой текст
Добавил ещё return; Для возврата //test!
*/
document.body.innerHTML = document.body.innerHTML.replace(/\.:/g, '');
document.body.innerHTML = document.body.innerHTML.replace(/не указано/g, '');
return;