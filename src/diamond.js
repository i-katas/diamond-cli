const START = 'A'.charCodeAt(0);
const LF = '\n';
const SPACE = ' ';

export default function(c) {
    return topHalfLines(c).concat(topHalfLines(c).reverse().slice(1)).join(LF);
}

function topHalfLines(c) {
    let lines = [];
    for(let current = START, end = c.charCodeAt(0); current <= end; current++) {
        lines.push(line(current, START, end));
    }
    return lines;
}

function line(c, start, end) {
    let line = [], margin = indents(c, start, end);
    line.push(margin);
    line.push(String.fromCharCode(c));
    if(c > START){
        line.push(spaces(c, start, end));
        line.push(String.fromCharCode(c));
    }
    line.push(margin);
    return line.join('');
}

function spaces(c, start/*, end*/) {
    return SPACE.repeat((c - start) * 2 - 1);
}
 
function indents(c, start, end) {
    return SPACE.repeat(end - c);
}
