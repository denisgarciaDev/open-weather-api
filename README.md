# Open weather API

This api aims to provide weather data from a city name.

## Install project
After cloning the project, enter the created folder and execute the following commands.]

Install all packages
```shell
$ npm install .
```

## Config your credentials key

create a file => **src/utils/config.json**

To obtain the required credentials, go to:
[Google maps Plataform](https://developers.google.com/maps/documentation/geocoding/start#get-a-key)
[Open Weather Map](https://home.openweathermap.org/api_keys)

```json
{
	"maps_key": "xxxxxxxxxxxxxxxxxxxxxxxx",
	"weather_key": "xxxxxxxxxxxxxxxxxxxxx"
}
```

Now, go ahead and run the fucking project!
```shell
$ firebase serve --only functions,hosting
```
## Deploy Firebase
```shell
$ firebase deploy
```

## Existing endpoints

| URL               |METHOD |BODY      |
|-------------------|-------|----------|
|/lat-long-from-city|`POST` |[B1](#B1)|
|/weather-from-city |`POST` |[B2](#B2)|

## B1
```json
{
	"city": "Araçatuba"
}
```

## B2
```json
{
	"city": "aracatuba",
	"units": "metric",
	"language": "pt"
}
```