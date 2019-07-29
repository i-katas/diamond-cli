#!/usr/bin/env node

import diamond from './diamond';

console.log(diamond(process.argv[2] || 'C'));
