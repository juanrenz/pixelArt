var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var indicadorDeColor = document.getElementById('indicador-de-color');
var mousePresionado 
var imagenBatman = document.getElementById('batman');
var imagenWonder = document.getElementById('wonder');
var imagenFlash = document.getElementById('flash');
var imagenInvisible = document.getElementById('invisible');
var botonGuardar = document.getElementById('guardar');

imagenBatman.addEventListener('click', function () {
  cargarSuperheroe(batman);
});

imagenWonder.addEventListener('click', function () {
  cargarSuperheroe(wonder)
});

imagenFlash.addEventListener('click', function () {
  cargarSuperheroe(flash)
});

imagenInvisible.addEventListener('click', function () {
  cargarSuperheroe(invisible)
});

botonGuardar.addEventListener('click', function (){
guardarPixelArt()}
);

window.addEventListener('mousedown', 
  (function(){
    mousePresionado = true;
  })
);

window.addEventListener('mouseup', 
  (function(){
   mousePresionado = false;
  })
);

colorPersonalizado.addEventListener('change', 
  (function() {
    colorActual = colorPersonalizado.value;
    indicadorDeColor.style.backgroundColor= colorActual;
  })
);

var $botonBorrar = $('#borrar');
$botonBorrar.click(function(){
  var $pixeles = $("#grilla-pixeles div");
  $pixeles.animate({backgroundColor: 'white'}, 1500);
});



function recorreColores() {
  for (var i=0; i<nombreColores.length;i++){
    var textoColor=nombreColores[i];
    var divColor = document.createElement('div');
    divColor.style.backgroundColor = textoColor;
    divColor.className = 'color-paleta';
    divColor.addEventListener ('click', function(){cambiaColor(this.style.backgroundColor)});
    paleta.appendChild(divColor);
  }
};

function creaGrillaPixeles(){
  for(var i=0; i<1750 ;i++){
  var pixel = document.createElement('div');
    pixel.addEventListener('click', function(){pintarPixel(this)});
    pixel.addEventListener('mouseover', function (){
      if(mousePresionado === true){
      pintarPixel(this)
      }
    });
    grillaPixeles.appendChild(pixel);
  };
};

function cambiaColor(color){
  indicadorDeColor.style.backgroundColor= color;
};

function pintarPixel(elemento){
 elemento.style.backgroundColor = indicadorDeColor.style.backgroundColor; 
};

function iniciar(){
  recorreColores();
  creaGrillaPixeles();
}

iniciar();