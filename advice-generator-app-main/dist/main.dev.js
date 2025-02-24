"use strict";

document.addEventListener('DOMContentLoaded', fetchAdvice);
var btn = document.getElementById('btn').addEventListener('click', fetchAdvice);

function fetchAdvice() {
  var response, data;
  return regeneratorRuntime.async(function fetchAdvice$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch('https://api.adviceslip.com/advice'));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          data = _context.sent;
          document.getElementById('advice-id').textContent = data.slip.id;
          document.getElementById('advice-text').textContent = data.slip.advice;
          _context.next = 15;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.error("Помилка завантаження поради", _context.t0);
          document.getElementById("advice-text").textContent = "Помилка завантаження...";

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
}
//# sourceMappingURL=main.dev.js.map
