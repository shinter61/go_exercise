package handler

import (
	"net/http"
	"strconv"
	"github.com/labstack/echo"
	 "../model"
)

func GetUser(c echo.Context) (err error) {
	db := gormConnect()
	id, _ := strconv.Atoi(c.Param("id"))
	user := db.First(&model.User{}, id)
	return c.JSON(http.StatusOK, user)
}

func ListUser(c echo.Context) (err error) {
	db := gormConnect()
	var users []model.User
	result := db.Find(&users)
	return c.JSON(http.StatusOK, result)
}