<h1 align="center">Bulk IP Translator</h1>

<p align="left">
  Standalone application for translating client IP's location from csv and jsonl files using Node.js streams.<br>
</p>

Features:
- **Csv and JSONL file support** - Both file types are support as input
- **Flexible translation strategy** - Choose between SQLITE and http://ip-api.com
- **Flexible output** - Choose between creating a JSONL file or writing to the standard output
- **Node.js Streams** - Work with data on demand
- **Redis** - Avoids multiple ip translations for the same client within a time window
- **Async Generators** - Faster processing and easier to work with
- **Adjustable Output Buffer** - Reduces writing to output stream too often
- **Adjustable HighWaterMark** Adjust values to the size of your input chunk

## ❯ Requirements

* **Node.js 16+**
* **Redis**
* **NPM**
* **Docker**

## ❯ Environment variables
```sh
# ip-api url
$ IPAPI_URL=http://ip-api.com

# Redis host
$ REDIS_HOST=localhost
# Redis port
$ REDIS_PORT=6379

# Redis cache TTL in minutes
$ MAX_IP_CACHE_TIME=30

# Buffer memory size for readStreams
$ HIGH_WATER_MARK=97

# Number of chunks concatenated before writing to ouput
$ OUTPUT_BUFFER_SIZE=1
```

## ❯ Create a Redis container if necessary
```sh
$ docker run --name redis -p 6379:6379 -d redis:latest redis-server --appendonly no
```

## ❯ Installation and usage
```sh
$ git clone https://github.com/Gleniton/croct.git
$ cd croct
$ cp .env.example .env
$ npm install
$ npm start
```

## > Using the cli for selecting input, ip translator and output strategy:
![](https://github.com/Gleniton/croct/blob/main/options.gif)

Notes:
- Only csv and jsonl files are listed on the selection menu
- You can place all your input files inside src/inputs folder
- When you choose JSONL as output, it will create an output.jsonl inside the src/outputs folder
