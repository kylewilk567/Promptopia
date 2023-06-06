// /** @type {import('next').NextConfig} */
// const nextConfig = {

//     images: {
//         domains: ['a0.muscache.com'],
//       },

//     //   webpack: (config, options) => {
//     //     config.module.rules.push({
//     //       test: /\.twig/,
//     //       use: 'twig-loader',
//     //     });
     
//     //     return config;
//     //   },


// }

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },

  images:{
    domains: ['lh3.googleusercontent.com'],
  },

  webpack(config){
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config;
  }
}



module.exports = nextConfig
