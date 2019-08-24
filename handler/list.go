package handler

import (
	"net/http"
	"strconv"

	"fmt"

	"../model"
	"github.com/labstack/echo"
)

// GetUser : ユーザー取得（id指定）
func GetUser(c echo.Context) (err error) {
	db := GormConnect()
	defer db.Close()
	id, _ := strconv.Atoi(c.Param("id"))
	user := db.First(&model.User{}, id)
	return c.JSON(http.StatusOK, user)
}

// ListUser : ユーザー全件取得
func ListUser(c echo.Context) (err error) {
	db := GormConnect()
	defer db.Close()
	var users []model.User
	result := db.Find(&users)
	fmt.Println(result)
	fmt.Println(users)
	return c.JSON(http.StatusOK, result)
}
