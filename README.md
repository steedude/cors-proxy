# httpProxy測試

## 主要功能

1.將網址傳給伺服器，由伺服器代為取得網站內容並回傳給前端使用者，避開CORS

2.將網址傳給伺服器，伺服器會代為爬蟲，將網站特定資料回傳給使用者

## 本地端測試

啟動專案

```bash
pnpm run dev
```

使用http-proxy-middleware套件取得網站內容:
[localhost:8080/proxy/?url=https://www.spaceship.com](http://localhost:8080/proxy/?url=https://www.spaceship.com/)

使用http-proxy套件取得網站內容:
[localhost:8080/http/?url=https://www.spaceship.com](http://localhost:8080/http/?url=https://www.spaceship.com/)

使用cheerio爬蟲:
localhost:8080/momo/?url="爬蟲網址"（尚未完成）

## 自動化部署

伺服器放在racknerd，透過github自動部署
[cors-proxy.y2k77.com](https://cors-proxy.y2k77.com/)
