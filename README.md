# ymir-codegen


1. 
```
cd ymir-codegen
```
```
npm run build -- [modelName/apiName/dbName]
```
or
```
npm run build -- [modelName/dbName] [apiName]
```
or
```
npm run build -- [modelName] [apiName] [dbName]
```

2. 
```
cd modelName-models
npm install
npm initdb
```

3. 
```
cd apiName-api
npm install
npm start
```