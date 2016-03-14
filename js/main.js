var $h1 = $('h1');

var writeGrains = function (grains) {

  document.write('<ul>');

  grains.forEach(function (blah) {
    document.write('<li>');
    document.write('<dl>');
    document.write('<dt><img src="images/' + blah.img + '" alt=""></dt>');
    document.write('<dd><h2>' + blah.name + '</h2></dd>');
    document.write('<dd>' + blah.desc + '</dd>');
    document.write('</dl>');
    document.write('</li>');
  });

  document.write('</ul>');
};

writeGrains(grains);
