const nc = require('node-clip')();

module.exports = () => {
    function mongoObjectId() {
        let timestamp = (new Date().getTime() / 1000 | 0).toString(16);
        return `${timestamp}xxxxxxxxxxxxxxxx`.replace(/[x]/g, () => {
            return (Math.random() * 16 | 0).toString(16);
        }).toLowerCase();
    };

    const id = mongoObjectId();

    nc.writeAll(id, () => {
        console.log(`ObjectID ${id} now on the clipboard.`);
    });
}
