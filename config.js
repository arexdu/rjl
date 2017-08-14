const env = process.env;
export default {
    nodeEnv: env.NODE_ENV || 'development',
    port: env.RJL_PORT || 8090,
    host: env.RJL_HOST || '0.0.0.0',
    mongodbUri: env.MDB_ENDPOINT || 'mongodb://127.0.0.1:27017/test'
};