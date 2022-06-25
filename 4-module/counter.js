let count = 0;

function increase() {
    count++;
}

function getCount() {
    return count;
}

// node에서 내보내는 방법

module.exports.getCount = getCount;
module.exports.increase = increase;

console.log(module);
