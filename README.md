# 按需引入出现错误

```bash
# Error
Module not found: Error: Can't resolve 'ant-design-vue/es/form/style/css' in '$PROJECT_PATH'
Module not found: Error: Can't resolve 'ant-design-vue/es/form-item/style/css' in '$PROJECT_PATH'
```

## 复现这个错误

```bash
git clone https://github.com/suqiernb/ant-design-vue-import-test.git
cd ant-design-vue-import-test
npm install
npm run serve
```

