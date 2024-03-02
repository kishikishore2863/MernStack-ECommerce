const express = require('express');
const fs = require('fs');

const read=fs.readFileSync('./notes/read.txt','utf-8');
console.log(read)