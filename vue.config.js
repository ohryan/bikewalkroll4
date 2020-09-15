module.exports = {
    // options...
    devServer: {
        disableHostCheck: true,
        host: 'dev.bikewalkroll.org',
        https: true,
    },
    pluginOptions: {
      s3Deploy: {
        registry: undefined,
        awsProfile: 'default',
        overrideEndpoint: false,
        region: 'us-east-1',
        bucket: 'new.bikewalkroll.org',
        createBucket: true,
        staticHosting: false,
        assetPath: 'dist',
        assetMatch: '**',
        deployPath: '/',
        acl: 'public-read',
        pwa: false,
        enableCloudfront: false,
        pluginVersion: '4.0.0-rc3',
        uploadConcurrency: 5
      }
    },
    // actually enable lazyloading
    // https://medium.com/@mrodal/how-to-make-lazy-loading-actually-work-in-vue-cli-3-7f3f88cfb102
    chainWebpack: (config) => {
      config.plugins.delete('prefetch')
    }
}
