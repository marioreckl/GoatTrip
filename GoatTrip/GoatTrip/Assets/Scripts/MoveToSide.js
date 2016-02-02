#pragma strict

var player: GameObject;
var step : float;

function Start () {
player.transform.position.x = player.transform.position.x - step;
//player.transform.position.y = (player.transform.position.y -  (0.7 * step));
}

function Update () {
player.transform.position.x = player.transform.position.x - step;
//player.transform.position.y = (player.transform.position.y - (0.7 * step));
}