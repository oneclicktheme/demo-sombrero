
$('.modal-toggle').on('click', function(e) {
  e.preventDefault();
  $('body').toggleClass('overflow-hidden');
  $('.modal').toggleClass('is-visible');
});

$(document).ready(function () {
  // Color Picker Tool Js
  const themeSwitchers = document.querySelectorAll('.default-switch');
  const dynamicInputs = document.querySelectorAll('input.input-color-picker');
  
  const handleThemeUpdate = (cssVars) => {
    const root = document.querySelector(':root');
    const keys = Object.keys(cssVars);
    keys.forEach(key => {
      root.style.setProperty(key, cssVars[key]);
      $.fn.changeColorForm(key, cssVars[key])
    });
  }
  
  themeSwitchers.forEach((item) => {
    item.addEventListener('click', (e) => {
      const bgColor = e.target.getAttribute('data-bg-color')
      const color = e.target.getAttribute('data-color')
      handleThemeUpdate({
        '--primary-bg-color': bgColor,
        '--primary-color': color
      });
      $("input.input-color-picker[data-id='color']").val(color)
      $("input.input-color-picker[data-id='bg-color']").val(bgColor)
    });
  });
  
  dynamicInputs.forEach((item) => {
    item.addEventListener('input', (e) => {
      const cssPropName = `--primary-${e.target.getAttribute('data-id')}`;
      handleThemeUpdate({
        [cssPropName]: e.target.value
      });
    });
  });
  
  $.fn.changeColorForm = function (key, color) {
    $(`form[name=contact] input[name='${key}']`).val(color)
  };
  
  
  //Typewriter Effect
  
  let TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtType.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];
    
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
    let that = this;
    let delta = 200 - Math.random() * 100;
    
    if (this.isDeleting) { delta /= 2; }
    
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
    
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    let elements = document.getElementsByClassName('typewrite');
    for (let i=0; i<elements.length; i++) {
      let toRotate = elements[i].getAttribute('data-type');
      let period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 6px solid #fff; padding-right: 10px }";
    document.body.appendChild(css);
  };
});

/**
 * Vars
 */
let points = [];
let rafID = null;

let guiVars = function() {
  this.totalPoints = 6;
  this.viscosity = 20;
  this.mouseDist = 80;
  this.damping = 0.15;
  this.showIndicators = false;
  this.leftColor = '#9ba8b1';
  this.rightColor = '#333333';
}

let vars = new guiVars();

/**
 * Mouse handler
 */
let mouseX = 0,
  mouseY = 0,
  mouseLastX = 0,
  mouseLastY = 0,
  mouseDirectionX = 0,
  mouseDirectionY = 0,
  mouseSpeedX = 0,
  mouseSpeedY = 0;

// Get mouse direction
function mouseDirection(e) {
  if (mouseX < e.pageX)
    mouseDirectionX = 1;
  else if (mouseX > e.pageX)
    mouseDirectionX = -1;
  else
    mouseDirectionX = 0;
  
  if (mouseY < e.pageY)
    mouseDirectionY = 1;
  else if (mouseY > e.pageY)
    mouseDirectionY = -1;
  else
    mouseDirectionY = 0;
  
  mouseX = e.pageX;
  mouseY = e.pageY;
}
$(document).on('mousemove', mouseDirection);

// Get mouse speed
function mouseSpeed() {
  mouseSpeedX = mouseX - mouseLastX;
  mouseSpeedY = mouseY - mouseLastY;
  
  mouseLastX = mouseX;
  mouseLastY = mouseY;
  
  setTimeout(mouseSpeed, 50);
}
mouseSpeed();

/**
 * Point
 */
function Point(x, y, canvas) {
  this.x = x;
  this.ix = x;
  this.vx = 0;
  this.cx = 0;
  this.y = y;
  this.iy = y;
  this.cy = 0;
  this.canvas = canvas;
}

Point.prototype.move = function() {
  this.vx += (this.ix - this.x) / vars.viscosity;
  
  let dx = this.ix - mouseX,
    dy = this.y - mouseY;
  
  let gap = this.canvas.data('gap');
  
  // Move point only when leaving color block
  if ((mouseDirectionX > 0 && mouseX > this.x) || (mouseDirectionX < 0 && mouseX < this.x)) {
    if (Math.sqrt(dx * dx) < vars.mouseDist && Math.sqrt(dy * dy) < gap) {
      this.vx = mouseSpeedX / 8
    }
  }
  
  this.vx *= (1 - vars.damping);
  this.x += this.vx;
};

/**
 * Init canvas
 */
function initCanvas() {
  let canvas = $('canvas');
  let context = canvas.get(0).getContext('2d');
  
  cancelAnimationFrame(rafID);
  
  // Resize canvas
  $('canvas').get(0).width = $(window).width();
  $('canvas').get(0).height = $(window).height();
  
  // Add points
  points = [];
  let gap = (canvas.height()) / (vars.totalPoints - 1);
  let pointX = $(window).width() / 2;
  
  for (let i = 0; i <= vars.totalPoints - 1; i++)
    points.push(new Point(pointX, i * gap, canvas));
  
  // Start render
  renderCanvas();
  
  canvas.data('gap', gap);
}

/**
 * Render canvas
 */
function renderCanvas() {
  let canvas = $('canvas');
  let context = canvas.get(0).getContext('2d');
  
  // rAF
  rafID = requestAnimationFrame(renderCanvas);
  
  // Clear scene
  context.clearRect(0, 0, canvas.width(), canvas.height());
  context.fillStyle = vars.leftColor;
  context.fillRect(0, 0, canvas.width(), canvas.height());
  
  // Move points
  for (let i = 0; i <= vars.totalPoints - 1; i++)
    points[i].move();
  
  // Draw shape
  context.fillStyle = vars.rightColor;
  context.strokeStyle = vars.rightColor;
  context.lineWidth = 1;
  context.beginPath();
  
  context.moveTo($(window).width() / 2, 0);
  
  for (let i = 0; i <= vars.totalPoints - 1; i++) {
    let p = points[i];
    
    if (points[i + 1] != undefined) {
      p.cx = (p.x + points[i + 1].x) / 2 - 0.0001; // - 0.0001 hack to fix a 1px offset bug on Chrome...
      p.cy = (p.y + points[i + 1].y) / 2;
    } else {
      p.cx = p.ix;
      p.cy = p.iy;
    }
    
    context.bezierCurveTo(p.x, p.y, p.cx, p.cy, p.cx, p.cy);
  }
  
  context.lineTo($(window).width(), $(window).height());
  context.lineTo($(window).width(), 0);
  context.closePath();
  context.fill();
  
  if (vars.showIndicators) {
    // Draw points
    context.fillStyle = '#000';
    context.beginPath();
    for (let i = 0; i <= vars.totalPoints - 1; i++) {
      let p = points[i];
      
      context.rect(p.x - 2, p.y - 2, 4, 4);
    }
    context.fill();
    
    // Draw controls
    context.fillStyle = '#fff';
    context.beginPath();
    for (let i = 0; i <= vars.totalPoints - 1; i++) {
      let p = points[i];
      
      context.rect(p.cx - 1, p.cy - 1, 2, 2);
    }
    context.fill();
  }
}

/**
 * Resize handler
 */
function resizeHandler() {
  initCanvas();
}
$(window).on('resize', resizeHandler).trigger('resize');
