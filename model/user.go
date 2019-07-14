package model

type User struct {
	Id int
	Name string
}

var Users = map[int]*User{}
var	Seq   = 1
