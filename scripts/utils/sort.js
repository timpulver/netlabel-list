module.exports = (netlabels, toSort) => {
    const sorted = [];

    netlabels.map(netlabel => {
        if (netlabel[toSort]) {
            netlabel[toSort].map(item => {
                sorted.push(item);
            });
        }
    });
    
    return sorted.sort();
};