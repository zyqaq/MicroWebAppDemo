export default {
  base: '/umi-app',
  npmClient: 'npm',
  plugins: ['@umijs/plugins/dist/qiankun'],
  qiankun: {
    slave: {},
  },
  headScripts: [
    { src: 'https://unpkg.com/axios@1.1.2/dist/axios.min.js', ignore: true },
  ],
};
