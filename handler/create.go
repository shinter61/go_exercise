package handler

import (
	"fmt"
	"net/http"

	"../model"
	"github.com/labstack/echo"
)

// CreateUser : ユーザー作成
func CreateUser(c echo.Context) (err error) {
	db := GormConnect()
	defer db.Close()

	u := &model.User{}
	if err := c.Bind(u); err != nil {
		return err
	}

	db.Create(&u)

	var users []model.User
	fmt.Println(users)
	result := db.Find(&users)
	fmt.Println(result)
	return c.JSON(http.StatusCreated, result)
}
