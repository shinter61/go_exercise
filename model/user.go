package model

type User struct {
	ID uint `gorm:"AUTO_INCREMENT"`
	Name string `gorm:"type:varchar(50);"`
}

var Users = map[int]*User{}
var	Seq   = 1
