package handler

import (
	"net/http"
	"../model"
	"github.com/labstack/echo"
)

func CreateUser(c echo.Context) (err error) {
	db := gormConnect()
	defer db.Close()

	u := &model.User{}
	if err := c.Bind(u); err != nil {
		return err
	}

	db.Create(&u)

	var users []model.User
	result := db.Find(&users)
	return c.JSON(http.StatusCreated, result)
}