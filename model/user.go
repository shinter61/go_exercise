package model

type User struct {
	ID uint `gorm:"AUTO_INCREMENT"`
	Name string `gorm:"type:varchar(50);"`
}
