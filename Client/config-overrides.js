module.exports= function override(config){
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback,{
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "timers": require.resolve("timers-browserify"),
        "os": require.resolve("os-browserify/browser"),
        "zlib": require.resolve("browserify-zlib"),
        "http": require.resolve("stream-http"),
        "vm": require.resolve("vm-browserify"),
        fs: false,
        net:false,
        tls:false,
        dns:false,
        child_process:false,
        timers:false,
        promises:false
    });
    config.resolve.fallback = fallback;
    return config;
}