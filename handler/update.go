package handler

import (
	"net/http"
	"strconv"

	"../model"
	"github.com/labstack/echo"
)

// UpdateUser : ユーザー情報更新
func UpdateUser(c echo.Context) (err error) {
	db := GormConnect()
	defer db.Close()

	u := &model.User{}
	id, _ := strconv.Atoi(c.Param("id"))
	db.First(u, id)

	if err := c.Bind(u); err != nil {
		return err
	}

	db.Model(u).Update("Name", u.Name)

	var users []model.User
	result := db.Find(&users)
	return c.JSON(http.StatusOK, result)
}
