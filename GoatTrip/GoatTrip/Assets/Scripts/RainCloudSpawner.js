#pragma strict

var ObjectToSpawn : GameObject;
var spawnPosition : GameObject;
var count : int = 0;
var maxCount: int;
var lowerLimit: float;
var upperLimit: float;


function Update () {
maxCount = Random.Range(lowerLimit, upperLimit);

count += maxCount;
 if(this.count >= 75)
 {
 Instantiate(this.ObjectToSpawn, this.spawnPosition.transform.position, this.spawnPosition.transform.rotation);
 this.count = 0;
 }
}