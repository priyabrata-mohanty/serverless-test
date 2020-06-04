module.exports.config =(serverless) => {
    serverless.cli.consoleLog('You can access Serverless config and methods as well!');

    return {
        role: 'arn:aws:iam::560665010627:role/mylambdarole'
    };
};

