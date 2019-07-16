package handler

import (
	"net/http"
	"../model"
	"github.com/labstack/echo"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

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

	u := &model.User{}
	if err := c.Bind(u); err != nil {
		return err
	}

	u.Name = "fugen"

	db.Table("User").Create(&u)

	return c.JSON(http.StatusCreated, u)
}