package handler

import (
	"fmt"
	"net/http"
	"github.com/labstack/echo"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

type User struct {
	Id int
	Name string
}

func gormConnect() *gorm.DB {
	db,err := gorm.Open("mysql", "docker_user:docker_user_pwd@tcp(docker.for.mac.localhost:3306)/docker_db")
	if err != nil {
    panic(err.Error())
  }
  return db
}

func CreateUser(c echo.Context) (err error) {
	db := gormConnect()
	defer db.Close()

	u := &User{}
	if err := c.Bind(u); err != nil {
		return err
	}

	u.Id = 1
	u.Name = "origin"

	db.Table("User").Create(&u)

	return c.JSON(http.StatusCreated, u)
}