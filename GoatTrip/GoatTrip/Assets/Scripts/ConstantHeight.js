#pragma strict
var obj : GameObject;
var height : float;

function Start()
{
height = obj.transform.position.y;
}
function Update () {
	obj.transform.position.y = height;
}