#pragma strict
var GarbageCollector : GameObject;
function Start()
{
GarbageCollector = GameObject.Find("GarbageCollector");
}

function Update()
{
if(this.transform.position.x > GarbageCollector.transform.position.x)
{
Destroy(this.gameObject);
}
}