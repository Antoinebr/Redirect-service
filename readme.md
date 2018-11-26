# Redirect Service

## How to start ? 

```
make build
```

```
make run
```

## API 

### Get a list of redirected urls 



```bash 
curl -X POST \
  http://localhost:3081/traceredirects/ \
  -H 'Content-Type: application/json' \
  -d '{
	
	"urls": [
        "https://www.uniqlo.com/es/es/mujer/abrigos/chaquetas",
        "https://www.uniqlo.com/es/es/mujer/pantalones-y-faldas",
        "https://www.uniqlo.com/es/es/mujer/punto",
        "https://www.uniqlo.com/es/es/mujer/punto",
        "https://www.uniqlo.com/es/es/mujer/punto"
    ]
}'
```

Returns 

```JSON 
[
    {
        "url": "https://www.uniqlo.com/es/es/mujer/abrigos/chaquetas",
        "numOfRedirects": 1,
        "finalUrl": "https://www.uniqlo.com/es/es/mujer/abrigos/abrigos-y-chaquetas",
        "redirected": true
    },
    {
        "url": "https://www.uniqlo.com/es/es/mujer/pantalones-y-faldas",
        "numOfRedirects": 1,
        "finalUrl": "https://www.uniqlo.com/es/es/mujer/pantalones-y-faldas/pantalones-pantalones-deportivos-leggings",
        "redirected": true
    },
    {
        "url": "https://www.uniqlo.com/es/es/mujer/punto",
        "numOfRedirects": 1,
        "finalUrl": "https://www.uniqlo.com/es/es/mujer/punto/jerseys-y-cardigans",
        "redirected": true
    }
]
```  