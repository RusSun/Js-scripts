var s = document.createElement('script');
    s.type = 'text/javascript';
    var code = 'document.body.innerHTML = document.body.innerHTML.replace(/\.:/g, '');
document.body.innerHTML = document.body.innerHTML.replace(/не указано/g, '');';
    try {
      s.appendChild(document.createTextNode(code));
      document.body.appendChild(s);
    } catch (e) {
      s.text = code;
      document.body.appendChild(s);
    }