#pragma strict
var jumpForce : float;
var player :GameObject;
var maxJump : float;
var minJump : float; 
var isPressed : System.Boolean = false;
var timePressed : float = 10;
var velocity : float;
var canJump: System.Boolean = true;
var gravity: float;

function Start()
{
  Physics.gravity = Vector3(0,-gravity,0);
}

function jump () {
	GetComponent.<Rigidbody>().AddForce(new Vector3(0, jumpForce, 0), ForceMode.Impulse);
}

function pressed ()
{
	isPressed = true;
	timePressed = 0;
	velocity = 15;
}
function released ()
{
	isPressed = false;
}

function Update ()
{
	if (isPressed || timePressed < minJump)
	{
		timePressed += Time.deltaTime;
		if(maxJump > timePressed)
		{
			if(timePressed < minJump)
			{
				velocity -=  Time.deltaTime * 10 ;
				GetComponent.<Rigidbody>().velocity.y = velocity;
			}
			else if(timePressed > minJump)
			{
				GetComponent.<Rigidbody>().AddForce(new Vector3(0, jumpForce, 0), ForceMode.Force);
			}
		}
	}
}
