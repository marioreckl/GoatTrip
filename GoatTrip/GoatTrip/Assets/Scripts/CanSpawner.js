#pragma strict
var ObjectToSpawn : GameObject;
var spawnPosition : GameObject;

var count : int = 0;
var maxCount : int = 15;
var temp: Vector3;

function Update () {
 temp= this.spawnPosition.transform.position;
 this.spawnPosition.transform.position.y = Random.Range(this.spawnPosition.transform.position.y - 1, this.spawnPosition.transform.position.y + 4);
 this.count++;
 if(this.count >= maxCount)
 {
 Instantiate(this.ObjectToSpawn, this.spawnPosition.transform.position, this.spawnPosition.transform.rotation);
 this.count = 0;
 }
  this.spawnPosition.transform.position = temp;
}