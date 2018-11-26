exports.uniq = (req, res, next) => {

    if (req.body.urls) {

        const uniqueUrls = new Set();

        req.body.urls.forEach(url => uniqueUrls.add(url));

        req.body.urls = [...uniqueUrls];

    }

    return next();
}