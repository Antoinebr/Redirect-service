const {
    exec
} = require('child_process');

const {
    promisify
} = require('util');

const execPromise = promisify(exec);

const validator = require('validator');

exports.trace = async (url) => {

    if (!url) throw new Error('Missing URL ! it should be -> http://example.com');

    if (!validator.isURL(url)) throw new Error(`${url} is not a valid URL`);

    const res = await execPromise(`curl -s -L -o /dev/null -w  %{num_redirects}__%{url_effective} ${url}`);

    let [numOfRedirects, finalUrl] = res.stdout.split('__');

    numOfRedirects = parseInt(numOfRedirects);

    let redirected = numOfRedirects > 0 ? true : false;

    return {
        url,
        numOfRedirects,
        finalUrl,
        redirected
    }

};