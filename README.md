# npm-package-boilerplate

使用 Typescript 创建自己的 NPM 包

## 依赖包

```bash
npm install --save-dev typescript ts-node
npm install tsup -D
```

## 初始化 tsconfig

```bash
npx tsc --init
```

把`outDir` 改成`dist`

### 打包工具

[tsup](https://tsup.egoist.dev/#what-can-it-bundle)

## 代码校验

[prettier](https://prettier.io/docs/en/install) 校验，模板仓库没有添加配置，是因为 prettier 经常更新，所以每次可以根据官方文档配置

## 参考文献

- [TypeScript NPM Package](https://pauloe-me.medium.com/typescript-npm-package-publishing-a-beginners-guide-40b95908e69c)
- [prettier](https://prettier.io/docs/en/install)
- [tsup](https://tsup.egoist.dev/#what-can-it-bundle)
