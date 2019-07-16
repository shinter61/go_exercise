package model

type User struct {
	Id int `gorm:"AUTO_INCREMENT"`
	Name string `gorm:"type:varchar(50);"`
}

var Users = map[int]*User{}
var	Seq   = 1
