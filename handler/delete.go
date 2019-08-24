package handler

import (
	"net/http"
	"strconv"

	"../model"
	"github.com/labstack/echo"
)

// DeleteUser : ユーザー削除
func DeleteUser(c echo.Context) (err error) {
	db := GormConnect()
	defer db.Close()

	u := &model.User{}
	id, _ := strconv.Atoi(c.Param("id"))
	db.First(u, id)
	db.Delete(u)
	var users []model.User
	result := db.Find(&users)
	return c.JSON(http.StatusOK, result)
}
