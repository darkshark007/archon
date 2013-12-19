# archon

A helper to test battle code bots (battlecode.org)

## Installation

npm install -g archon

## How it works

cd path/to/battlecode

### Single matches

Plays the two bots against each other on the specified maps
```
> archon match teams/botA teams/botB maps/map1
 map1 [botA/botB] botB 1000
 Summary:
 botA 0  1 0
 botB 1  0 100
```
on map1 botB won in 1000 - 1499 rounds

```
> archon match teams/botA teams/botB maps/map1 maps/map2 ... maps/mapN

 map1 [botA/botB] botA 500
 map2 [botA/botB] botB 1000
 ...
 mapN [botA/botB] botA 1500
 Summary:
 botA 5 5 50
 botB 5 5 50
```

### Round Robin 

Plays all bots against each other on every map

```
> archon match teams/botA teams/botB teams/botC maps/map1 maps/map2

 map1 [botA/botB] botA 1000
 map1 [botA/botC] botC 500
 map1 [botB/botC] botB 1500
 map2 [botA/botB] botA 1500
 map2 [botA/botC] botC 1000
 map2 [botB/botC] botC 2500
 Summary:
 botA 2 2 50
 botB 1 3 25
 botC 3 1 75
```

### VS World [Unsupported]

Plays the host bot against all the others on all the maps

```
> archon match --host botA teams/botB teams/botC maps/map1 maps/map2

 map1 [botA/botB] botA 500
 map1 [botA/botC] botC 1000
 map2 [botA/botB] botA 1000
 map2 [botA/botC] botC 2000
 Summary:
 botA map1 1 1 50
 botA map2 1 1 50
```

## Feature Requests
1. Output to CSV
2. Save the game files
3. Single elimination tournament
4. Double elimination tournament

