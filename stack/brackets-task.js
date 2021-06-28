// Check the sequence for the matching brackets
// {} => valid
// (()()) => valid
// (())) => invalid
// [{(())))}] => invalid

const checkBrackets = (seq) => {
    let current;
    let stack = [];
    const matchingMap = {
        "(": ")",
        "[": "]",
        "{": "}"
    };
    for(let i = 0; i < seq.length; i++) {
        current = seq[i];
        if (current === '(' || current === '[' || current === '{') {
            stack.push(current);
        } else if (current === ')' || current === ']' || current === '}') {
            const lastBracket = stack.pop();
            if (matchingMap[lastBracket] !== current) {
                return false;
            }
        }
    }
    return stack.length === 0;
};