# Benchmark test for TCP microservice communication.

in this project we have a simple architecture with one api gateway and two microservices.

there is only one route in the `gateway` and it sends a request to the first `microservice1`, then the `microservice1` does a tcp request to `microservice2` simulating a microservice making request to another one and then returns the data to `microservice1` that returns the data to the `gateway`that returns it to the client.

to bench mark the api i used [autocannon](https://github.com/mcollina/autocannon?ref=thechiefio) and thous are the results

```
$ autocannon http://localhost:3010

Running 10s test @ http://localhost:3010
10 connections
```

| SynStattax | 2.5% | 50%  | 97.5% |  99%  |   Avg   |  Stdev  |  Max  |
| :--------: | :--: | :--: | :---: | :---: | :-----: | :-----: | :---: |
|  Latency   | 2 ms | 3 ms | 19 ms | 26 ms | 4.65 ms | 4.59 ms | 57 ms |

|   Stat    |   1%   |  2.5%  |  50%   | 97.5%  |  Avg   | Stdev  |  Min   |
| :-------: | :----: | :----: | :----: | :----: | :----: | :----: | :----: |
|  Req/Sec  |  1351  |  1351  |  1980  |  2239  | 1941.2 | 249.38 |  1351  |
| Bytes/Sec | 337 kB | 337 kB | 493 kB | 558 kB | 483 kB | 62 kB  | 336 kB |
