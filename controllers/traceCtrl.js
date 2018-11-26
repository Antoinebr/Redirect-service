const trace = require('../trace/trace')

exports.traceRedirect = async (req, res) => {

    try {

        if (!req.body.urls) throw new Error('Missing urls array');

        const checkUrls = req.body.urls.map(url => trace.trace(url));

        const checkedUrls = await Promise.all(checkUrls);

        res.json(checkedUrls);

    } catch (e) {

        e = e.toString().includes('Command failed') ? "Something went wrong the url is not reachable" : e;

        res.status(500).send(`Something went wrong ${e}`);

    }

}