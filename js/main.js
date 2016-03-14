var $h1 = $('h1');

var writeGrains = function (grains) {

  document.write('<ul>');

  grains.forEach(function (blah) {
    document.write('<li>');
    document.write('<img src="images/' + blah.img + '" alt="">');
    document.write('<h2>' + blah.name + '</h2>');
    document.write('<p>' + blah.desc + '</p>');
    document.write('</li>');
  });

  document.write('</ul>');
};

writeGrains(grains);
