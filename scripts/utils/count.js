const data = require('../../netlabels.json');
const sort = require('./sort');
const items = [];

const hasItem = item => {
    let found = false;

    items.map(i => {
        if (i.name === item) {
            found = true;
        }
    });

    return found;
};

const pushItem = item => {
    if (hasItem(item)) {
        items.map(i => {
            if (i.name === item) {
                i.count += 1;
            }
        });
    } else {
        items.push({ name: item, count: 1 });
    }
};

module.exports = toCount => {
    sort(data.netlabels, toCount).map(item => {
        pushItem(item);
    });

    items.map(item => {
        console.log(`${item.name} (${item.count})`);
    });
};