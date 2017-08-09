const env = process.env;
export default {
    nodeEnv: env.NODE_ENV || 'development',
    port: env.RJL_PORT || 8090,
    host: env.RJL_HOST || '0.0.0.0',
    apiurl: env.API_ENDPOINT || 'http://192.168.239.140:8010'
};