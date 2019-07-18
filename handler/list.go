package handler

import (
	"net/http"
	"strconv"
	"github.com/labstack/echo"
	 "../model"
)

func GetUser(c echo.Context) (err error) {
	db := gormConnect()
	defer db.Close()
	id, _ := strconv.Atoi(c.Param("id"))
	user := db.First(&model.User{}, id)
	return c.JSON(http.StatusOK, user)
}

func ListUser(c echo.Context) (err error) {
	db := gormConnect()
	defer db.Close()
	var users []model.User
	result := db.Find(&users)
	return c.JSON(http.StatusOK, result)
}