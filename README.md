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
|  Latency   | 1 ms | 3 ms | 11 ms | 15 ms | 3.21 ms | 2.63 ms | 43 ms |

|   Stat    |   1%   |  2.5%  |  50%   | 97.5%  |   Avg   | Stdev  |  Min   |
| :-------: | :----: | :----: | :----: | :----: | :-----: | :----: | :----: |
|  Req/Sec  |  1567  |  1567  |  2851  |  3211  | 2701.91 | 467.73 |  1567  |
| Bytes/Sec | 390 kB | 390 kB | 710 kB | 800 kB | 673 kB  | 116 kB | 390 kB |
