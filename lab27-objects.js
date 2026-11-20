'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

function fn () {
    const object_const = { name: ''};
    let object_variable = { name: ''};

    object_const.name = 'Clark';
    object_variable.name = 'Clark';

    object_const = {name: 'Javi'};
    object_variable = {name: 'Javi'};
};


module.exports = { fn };
