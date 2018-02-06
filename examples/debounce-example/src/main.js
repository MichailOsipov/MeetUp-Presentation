var debounce = require('lodash.debounce');
var i = 1;
requestsCount.innerHTML = '-';

var k = 1;
debouncedRequestsCount.innerHTML = '-';

userInput.addEventListener('input', function () {
    requestsCount.innerHTML = i;
    i++;
});

debouncedInput.addEventListener('input', debounce(function () {
    debouncedRequestsCount.innerHTML = k;
    k++;
}, 300));
