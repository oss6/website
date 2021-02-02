# website

> My personal website

## Local development

```
$ npm run start
```

## Upload website

### Using AWS cli

```
$ npm run build
$ cd _site
$ aws s3 sync . s3://ossamaedbali.me
$ aws cloudfront create-invalidation --distribution-id E2XV76W0IRWS0A --paths "/*"
```

### Manually

```
$ npm run build
```

Upload `_site` to S3.
