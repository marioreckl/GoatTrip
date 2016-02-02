#pragma strict

var ObjectToSpawn : GameObject;
var spawnPosition : GameObject;

var count : int = 0;
var maxCount : int = 15;

function Update () {

 this.count++;
 if(this.count >= maxCount)
 {
 Instantiate(this.ObjectToSpawn, this.spawnPosition.transform.position, this.spawnPosition.transform.rotation);
 this.count = 0;
 }
}