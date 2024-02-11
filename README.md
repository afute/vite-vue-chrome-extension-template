# chrome-extensions-template

> 使用 Vite + Vue + Typescript + Less 的chrome插件模板

## 参考

- [源项目](https://github.com/NekitCorp/chrome-extension-svelte-typescript-boilerplate)
- [Vite](https://vitejs.dev/)
- [Vue](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Less](https://lesscss.org/)
- [CRXJS Vite Plugin](https://github.com/crxjs/chrome-extension-tools/blob/main/packages/vite-plugin/README.md)
- [Chrome Extensions Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/)

## Development

```bash
# build files to `/dist` directory
npm install
npm run dev
```

## Build

```bash
# build files to `/dist` directory
npm install
npm run build
```

## 加载插件到浏览器

1. 打开浏览器拓展程序开发者模式
2. 选择"加载已解压的扩展程序"
3. 选择"/dist"文件夹

![1.Example](example/1.jpg)
![2.Example](example/2.jpg)
![3.Example](example/3.jpg)
